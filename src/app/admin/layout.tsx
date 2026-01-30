import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, LogOut } from "lucide-react";
import { logout } from "@/actions/auth";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    // Allow access to login page without auth
    // This layout wraps everything under /admin, so we need to handle the login route specifically
    // However, Next.js Layouts don't know the current pathname easily in Server Components.
    // So usually we put the auth check in middleware or handle the login page separately.
    // For simplicity here, we'll strip the check if we are in the login page, but we can't detect it easily here.
    // BETTER APPROACH: Move login page OUT of this layout or check conditionally.
    // Actually, let's just use middleware for protection, or a simple check here BUT
    // we need to support the login page rendering.

    // Alternative: We will assume this layout is for PROTECTED pages.
    // We will move the login page `src/app/admin/login` to `src/app/login` to avoid this layout? 
    // No, let's just make a specific layout for the dashboard part, or handle it here.

    // If we are visiting /admin/login, this layout still runs.
    // Let's rely on middleware.ts for the actual protection, 
    // and use this layout just for the "Admin UI" structure (sidebar, logout button etc).

    // BUT, to avoid middleware complexity in this demo, let's just do a check:
    // We can't easily check path here.

    // Let's refactor: 
    // 1. /admin/login/page.tsx -> /app/login/page.tsx (Move it out)
    // 2. /admin/* -> Protected by check in this layout.

    if (!session) {
        // If we are NOT in the login flow... 
        // Since this file is /admin/layout.tsx, it wraps /admin/login too.
        // That is problematic for a simple check.

        // FIX: We will NOT put the check here. We will check in page.tsx of admin or use Middleware.
        // Let's use Middleware!
    }

    return (
        <div>
            <nav style={{
                padding: '1rem 2rem',
                borderBottom: '1px solid var(--glass-border)',
                display: 'flex',
                justifyContent: 'space-between',
                background: 'rgba(0,0,0,0.2)'
            }}>
                <Link href="/" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', opacity: 0.7 }}>
                    <ArrowLeft size={18} /> Back to Site
                </Link>

                {session && (
                    <form action={logout}>
                        <button type="submit" style={{
                            background: 'none',
                            border: 'none',
                            color: '#ff5555',
                            cursor: 'pointer',
                            display: 'flex',
                            gap: '0.5rem',
                            alignItems: 'center'
                        }}>
                            Logout <LogOut size={18} />
                        </button>
                    </form>
                )}
            </nav>
            {children}
        </div>
    );
}
