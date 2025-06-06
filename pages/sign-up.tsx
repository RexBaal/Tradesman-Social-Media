"use client";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f2f2f2" }}>
      <h1>Create Account</h1>
      {/* TODO: Replace with <SignUp /> from @clerk/nextjs once keys are configured */}
      <p style={{ marginBottom: "1rem" }}>
        Clerk sign-up form will appear here.
      </p>
      <button onClick={() => router.push("/sign-in")}>Back to Sign In</button>
    </main>
  );
}
