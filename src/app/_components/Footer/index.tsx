
import Link from "next/link";

import { Footer } from "../../../payload/payload-types";
import { fetchFooter } from "../../_api/fetchGlobals";


import styles from "./styles.module.css";
export async function Footer() {
  let footer: Footer | null = null;

  try {
    footer = await fetchFooter();
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || [];

  return (
    <footer className={styles.footer}>
      <div>
        <h5>Go To</h5>
        <nav className={styles.goToNav}>
          {navItems.map(({ link }, i) => {
            return (
              <Link className={link} key={i} href={link.url}>{link.label}</Link>
            );
          })}
        </nav>

      </div>
      <div>
        {/* TODO: Update fetchGlobals to include socials and then update here. */}
        <h5>We're Social</h5>
        {["Md", "Md", "Md", "Md", "Md", "Md", "Md", "Md"].map((item, i) => {
          return <span style={{ marginRight: "20px" }}>{item}</span>;
        })}
      </div>
      <div>
        <h5>Contact Us</h5>
        <a href={"mailto:contact@subvisual.com"}>
          <p>
            contact@subvisual.com
          </p>
        </a>
      </div>
      <div>
        <h5>Offices</h5>
        <p>
          Remote. Work anywhere in Europe.
          <br />
          Or join our mothership, landed in Braga, Portugal
        </p>
      </div>


    </footer>


  );
}
