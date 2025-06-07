"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/SignUp.module.css";

export default function SignUpPage() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Create Account</h1>
      {/* TODO: Replace with <SignUp /> from @clerk/nextjs once keys are configured */}
      <p className={styles.paragraph}>Clerk sign-up form will appear here.</p>
      <button onClick={() => router.push("/sign-in")}>Back to Sign In</button>
    </main>
  );
}
