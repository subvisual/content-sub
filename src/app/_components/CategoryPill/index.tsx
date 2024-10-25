"use client";
import styles from "./styles.module.css";
import { CloseIcon } from "@/app/_icons/icons";
import React, { useState } from "react";

interface CategoryPillProps {
  title: string,
  id?: string,
  selected?: boolean,
  setActiveFilter?: React.Dispatch<React.SetStateAction<boolean>>
  setActiveCategory?: React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryPill({ title, id, selected = false, setActiveFilter, setActiveCategory }: CategoryPillProps) {

  const dynamicStyle = {
    "--dynamic-color": selected ? "var(--sub-blue-300)" : "var(--sub-blue-100)",
  } as React.CSSProperties;

  return (
    <div id={id} className={styles.categoryPill} style={dynamicStyle}>
      {title}
      {selected && (
        <button onClick={(e) => {
          // Stop propagation due to heavily nestes structure
          e.stopPropagation();
          if (setActiveFilter) {
            setActiveFilter(false)
          }

          if (setActiveCategory) {
            setActiveCategory("")
          }
        }}>
          <CloseIcon id={id} width="16px" color="currentColor" />
        </button>
      )}
    </div>
  );
}
