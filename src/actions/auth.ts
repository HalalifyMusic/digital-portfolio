"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Simple hardcoded password for demo purposes
// In production, this should be an env variable
const ADMIN_PASSWORD = "admin";

export async function login(prevState: any, formData: FormData) {
    const password = formData.get("password") as string;

    if (password === ADMIN_PASSWORD) {
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });
        redirect("/admin");
    } else {
        return { error: "Invalid password" };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    redirect("/admin/login");
}
