import Image from "next/image";

import { getImage } from "../../_utilities/getImage";
import styles from "./styles.module.css";

import { Media } from "@/payload-types";
import {  fetchMediaByID } from "@/app/_utilities/contentFetchers";

export default function FeaturedImage({ src, className }: { className?: string; src: string | Media }) {

const imageSource = getImage(src)


  return (
    <Image width={"10"} height={"10"}
           className={className ? className : styles.featuredImage}
           src={imageSource} alt={'alt info'}

    />
  );
}
