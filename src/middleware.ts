import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const adminSession = request.cookies.get("admin_session");
    const isLoginPage = request.nextUrl.pathname === "/admin/login";

    // Protect /admin routes
    if (request.nextUrl.pathname.startsWith("/admin")) {
        if (!adminSession && !isLoginPage) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }

        // Redirect to dashboard if already logged in and visiting login
        if (adminSession && isLoginPage) {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/admin/:path*",
};
