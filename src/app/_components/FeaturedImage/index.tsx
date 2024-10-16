import Image from "next/image";
import styles from "./styles.module.css";
import { Media } from "@/payload-types";

export default function FeaturedImage({ src, className }: { className?: string; src: Media }) {

  return (

      <Image fill={true}
             className={className ? className : styles.featuredImage}
             // @ts-ignore
             src={src}
             alt={"alt info"}

      />


  );
}
