import Link from "next/link";
import DropDownIcon from "./DropDownIcon";
import styles from "./styles.module.css";
import Logo from "@/app/_components/Header/Logo";
import { fetchGlobals } from "@/app/_utilities/contentFetchers";

const defaultStyle = {
  '--dynamic-background': "transparent",
  '--dynamic-color': "var(--dark-rock-800)",
  '--dynamic-width': '100%'
};

export async function Header({ style = defaultStyle }) {

  const header = await fetchGlobals("header");

  // @ts-ignore
  const navItems = header?.navItems || [];

  return (
    <>
      {/* @ts-ignore */}
      <header className={styles.container} style={style}>
        <div>
          <Logo />
        </div>

        {/* TODO: Conditionally format Content Hub to reflect active link?*/}
        <nav className={styles.navbar}>
          {navItems.map(({ link }, i) => {
            return (
              <Link key={i} href={link.url}>
                {link.label}
              </Link>
            );
          })}
          <Link href={"mailto:contact@subvisual.com"} className={styles.contactUsPill}>
            CONTACT US
          </Link>
        </nav>
        <div className={styles.dropDownIcon}>
          <DropDownIcon />
        </div>
      </header>
    </>
  );
}
