import Image from "next/image";

import { getImage } from "../../_utilities/getImage";
import styles from "./styles.module.css";

import { Media } from "@/payload-types";
import { fetchMediaByID } from "@/app/_utilities/contentFetchers";

export default function FeaturedImage({ src, className }: { className?: string; src: Media }) {


  // const imageSource = getImage(src);
  // console.log('src is:',src)


  return (

      <Image fill={true}
             className={className ? className : styles.featuredImage}
             // @ts-ignore
             src={src}
             alt={"alt info"}

      />


  );
}
