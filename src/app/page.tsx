import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h2 className={styles.main__title}>MainPage</h2>

      <p className={styles.main__description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cumque
        eligendi nobis reprehenderit delectus veritatis fuga ipsa vitae aliquid.
        Totam dicta quis iusto vero nisi et ex cupiditate corporis architecto?
      </p>

      <p className={styles.main__description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        culpa assumenda laudantium libero sapiente vitae ut maiores quod ad,
        ducimus eius dicta et, odio, beatae maxime voluptatem officiis unde
        molestiae.
      </p>

      <p className={styles.main__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        accusamus, corporis suscipit non quaerat aspernatur maxime voluptatum
        totam voluptates omnis saepe similique aut earum dolor necessitatibus
        quia quam, porro architecto!
      </p>
    </>
  );
}
