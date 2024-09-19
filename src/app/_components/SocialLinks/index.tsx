import React from "react";
import Link from "next/link";

export default function SocialLinks({socials}: {socials: string[]}) {

  return (
    <div style={{ marginTop: "10px" }}>
      {socials.map((link, i) => (
        <Link href={link} key={i}>{link}</Link>
      ))}
    </div>
  )
}
