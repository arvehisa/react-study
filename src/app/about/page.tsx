import styles from "@/styles/page.module.css";
import { Documents } from "@/components/Documents";
import { Header } from "@/components/Header";
import { Headline } from "@/components/Headline";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Headline page="about" />
      <Logo />
      <Documents />
    </main>
  );
}