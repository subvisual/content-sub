import React from "react";
import styles from "./AuthorPills/styles.module.css";


import FeaturedImage from "@/app/_components/FeaturedImage";
import { LinkedInIcon, TwitterIcon } from "@/app/_icons/socialIcons";
import Image from "next/image";
import { TwoAuthorPill } from "@/app/_components/Authors/AuthorPills";
import { VariousAuthorsPill } from "@/app/_components/Authors/AuthorPills";
import { AuthorPill } from "@/app/_components/Authors/AuthorPills";
export default function Authors({ authors }) {


  return (
    <div>
      {authors.length === 1 && <AuthorPill author={authors[0]} />}
      {authors.length === 2 && <TwoAuthorPill authors={authors} />}
      {authors.length > 2 && <VariousAuthorsPill authors={authors} />}
    </div>


  );
}
