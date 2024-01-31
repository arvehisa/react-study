import styles from "../styles/page.module.css";
import { Documents } from "../components/Documents";
import { Logo } from "../components/Logo";
import { Headline } from "../components/Headline";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Headline page="index"/>
      <Logo />
      <Documents />
    </main>
  );
}
