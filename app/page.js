import MainHeader from "@/components/main-header/main-header";
import Link from "next/link";
import classees from "./page.module.css";
export default function Home() {
  return (
    <>
      <header className={classees.header}>
        <div className={classees.slideshow}></div>
        <div>
          <div className={classees.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classees.cta}>
            <Link href="/community">join the community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        
      </main>
    </>
  );
}
