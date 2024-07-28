import { Button } from "@components/Button";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className={styles.wrapper}>
      <h1>Welcome to QuickPolls</h1>
      <div className={styles.action__wrapper}>
        <Button variant="outline">
          <Link to="/join-poll">Join poll</Link>
        </Button>
        <Button>
          <Link to="/sign-in">Start a poll</Link>
        </Button>
      </div>
    </main>
  );
}
