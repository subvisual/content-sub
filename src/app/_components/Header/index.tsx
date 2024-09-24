import Link from "next/link";

import { Header } from "../../../payload/payload-types";
import { fetchHeader } from "../../_api/fetchGlobals";
import styles from "./styles.module.css";

import DropDownIcon from "./DropDownIcon";

export async function Header() {
  let header: Header | null = null;

  try {
    header = await fetchHeader();
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = header?.navItems || [];

  return (
    <>
      <header className={styles.container}>
        <div style={{ fontFamily: "Times New Roman" }}>SUBVISUAL</div>

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
        <DropDownIcon className={styles.dropDownIcon} />
      </header>
    </>
  );
}
