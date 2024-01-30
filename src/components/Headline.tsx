import styles from "../app/page.module.css";
import { VercelLogo } from "./VercelLogo";
import React from "react";

type HeadlineProps = {
    page: string;
}

export function Headline(props: HeadlineProps) {
  console.log(props);
  return (
      <div className={styles.description}>
        <p>
          {props.page} Page by editing&nbsp;
          {<code className={styles.code}>src/app/{props.page}.tsx</code>}
        </p>
      <VercelLogo />
      </div>
  );
}
