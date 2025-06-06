"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      {/* Logo area */}
      <div className={styles.logo}>
        <Image
          src="/tradesman.jpg"
          alt="Tradesmen working"
          width={60}
          height={60}
          style={{ borderRadius: "50%" }}
        />
        <h1 className={styles.title}>Skill Trade Connect</h1>
      </div>
      <h2 className={styles.tagline}>The Social Network for Skilled Trades</h2>
      <p className={styles.description}>
        Welcome to the only online home built just for tradespeople. Connect,
        share your craft, find jobs, and join a real community that values
        skilled hands.
      </p>
      <div className={styles.icons}>🔧 ⚒️ 🧰</div>
      <button className={styles.button} onClick={() => router.push("/sign-in")}> 
        Enter
      </button>
      <footer className={styles.footer}>
        Made for Tradesmen, by Tradesmen
      </footer>
      {/*
        TODO: Add testimonials from real tradespeople to build trust.
        TODO: Include quick links to training resources or local suppliers.
      */}
    </main>
  );
}
