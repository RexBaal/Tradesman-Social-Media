"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", minHeight: "100vh", background: "#f4f6f8"
    }}>
      <Image src="/tradesman.jpg" alt="Tradesmen working" width={180} height={180} style={{ borderRadius: 16, marginBottom: 24 }} />
      <h1 style={{ color: "#0070f3", fontSize: "2.3rem", marginBottom: 8 }}>SkillTradeConnect</h1>
      <h2 style={{ color: "#444", marginBottom: 16, fontWeight: 500 }}>The Social Network for Skilled Trades</h2>
      <p style={{ maxWidth: 420, textAlign: "center", marginBottom: 28 }}>
        Welcome to the only online home built just for tradespeople.  
        Connect, share your craft, find jobs, and join a real community that values skilled hands.
      </p>
      <button
        onClick={() => router.push("/sign-in")}
        style={{
          background: "#0070f3", color: "white", padding: "14px 40px",
          border: "none", borderRadius: 8, fontSize: "1.1rem", fontWeight: 600,
          cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
        }}
      >
        Enter
      </button>
    </main>
  );
}
