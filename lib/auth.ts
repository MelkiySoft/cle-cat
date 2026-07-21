import { createClient } from './supabase/server'
import { Role } from '@prisma/client'

export async function getCurrentUser() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return null

  // Здесь позже добавим Prisma user
  return user
}

export async function getUserRole() {
  // Пока заглушка — позже свяжем с Prisma
  return 'CUSTOMER' as Role
}