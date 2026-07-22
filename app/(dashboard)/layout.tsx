import { getCurrentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { dbUser } = await getCurrentUser() || {}

    if (!dbUser) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b p-4">
                <p>Роль: {dbUser.role}</p>
            </header>
            <main>{children}</main>
        </div>
    )
}