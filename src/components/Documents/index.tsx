import styles from "@/components/Documents/Documents.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates",
    title: "Templates →",
    description: "Explore starter templates for Next.js.",
  },
  {
    href: "https://vercel.com/new",
    title: "Deploy →",
    description: "Instantly deploy your Next.js site to a public URL with Vercel.",
  }
]

export function Documents() {
  return (
      <div className={styles.grid}>
        {ITEMS.map((item) => (
            <a key={item.href} className={styles.card} href={item.href} target="_blank">
              <h3 className={styles.title}> {item.title} </h3>
              <p className={styles.description}> {item.description} </p>
            </a>
          )
        )}
      </div>
  );
}