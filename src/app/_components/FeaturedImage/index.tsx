import Image from "next/image";
import styles from "./styles.module.css";
import { Media } from "@/payload-types";

export default function FeaturedImage({ src, radius }: { radius?: string; src: Media }) {

  return (

      <Image fill={true}
             style={{borderRadius: radius ?? '10px'}}
             // @ts-ignore
             src={src}
             alt={"alt info"}

      />


  );
}
