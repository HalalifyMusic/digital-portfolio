"use client";

import { useActionState } from "react";
import { login } from "@/actions/auth";
import styles from "./page.module.css";
import { Lock } from "lucide-react";

const initialState = {
    error: "",
};

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(login, initialState);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <Lock size={32} />
                </div>
                <h1>Admin Access</h1>
                <form action={formAction} className={styles.form}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        className={styles.input}
                    />
                    {state?.error && <p className={styles.error}>{state.error}</p>}
                    <button type="submit" disabled={isPending} className={styles.button}>
                        {isPending ? "Unlocking..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
