import { createClient } from './supabase/server'
import { prisma } from './prisma'
import { Role } from '@prisma/client'

export async function getCurrentUser() {
    const supabase = await createClient()
    const { data: { user: supabaseUser } } = await supabase.auth.getUser()

    if (!supabaseUser?.id) {
        console.log('No Supabase user')
        return null
    }

    console.log('Supabase user ID:', supabaseUser.id)

    let dbUser = await prisma.user.findUnique({
        where: { supabaseAuthId: supabaseUser.id },
        include: { profile: true }
    })

    if (!dbUser) {
        console.log('Creating new Prisma user...')
        dbUser = await prisma.user.create({
            data: {
                supabaseAuthId: supabaseUser.id,
                email: supabaseUser.email!,
                role: 'CUSTOMER' as Role,
            },
            include: { profile: true }
        })
        console.log('Created user:', dbUser.id)
    } else {
        console.log('Found existing user:', dbUser.id)
    }

    return { supabaseUser, dbUser }
}