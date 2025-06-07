"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/SignIn.module.css";

export default function SignInPage() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Sign In</h1>
      {/* TODO: Replace with <SignIn /> from @clerk/nextjs once keys are configured */}
      <p className={styles.paragraph}>Clerk authentication will appear here.</p>
      <button onClick={() => router.push("/sign-up")}>Create Account</button>
    </main>
  );
}
