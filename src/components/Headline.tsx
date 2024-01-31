import styles from "./Headline.module.css";
import { VercelLogo } from "./VercelLogo";

type HeadlineProps = {
    page: string;
}

export function Headline(props: HeadlineProps) {
  console.log(props);
  return (
      <div className={styles.description}>
        <p>
          {props.page} Page by editing&nbsp;
          <code className={styles.code}>src/app/{props.page}.tsx</code>
        </p>
      <VercelLogo />
      </div>
  );
}
