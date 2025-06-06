"use client";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f2f2f2" }}>
      <h1>Sign In</h1>
      {/* TODO: Replace with <SignIn /> from @clerk/nextjs once keys are configured */}
      <p style={{ marginBottom: "1rem" }}>
        Clerk authentication will appear here.
      </p>
      <button onClick={() => router.push("/sign-up")}>Create Account</button>
    </main>
  );
}
