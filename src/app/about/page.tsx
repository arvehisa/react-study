import styles from "../page.module.css";
import { Documents } from "../../components/Documents";
import { Logo } from "../../components/Logo";
import { Headline } from "../../components/Headline";

export default function Home() {
  return (
    <main className={styles.main}>
      <Headline page="about" />
      <Logo />
      <Documents />
    </main>
  );
}