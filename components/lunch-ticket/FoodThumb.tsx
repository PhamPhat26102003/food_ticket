"use client";

import { useEffect, useState } from "react";
import { PLACEHOLDER_IMAGE } from "./data";

type FoodThumbProps = {
  src?: string;
  alt: string;
  size?: "sm" | "lg";
  dimmed?: boolean;
};

export default function FoodThumb({
  src,
  alt,
  size = "sm",
  dimmed = false,
}: FoodThumbProps) {
  const [current, setCurrent] = useState(src);
  const box = size === "lg" ? "h-14 w-14 rounded-md" : "h-8 w-8 rounded-sm";

  useEffect(() => {
    setCurrent(src);
  }, [src]);

  if (!current) {
    return (
      <span
        aria-hidden
        className={`flex flex-shrink-0 items-center justify-center bg-paperdark text-base ${box} ${dimmed ? "opacity-40" : ""}`}
      >
        🍽️
      </span>
    );
  }

  return (
    <img
      src={current}
      alt={alt}
      onError={() => {
        if (current !== PLACEHOLDER_IMAGE) setCurrent(PLACEHOLDER_IMAGE);
        else setCurrent(undefined);
      }}
      className={`flex-shrink-0 object-cover ${box} ${dimmed ? "opacity-40 grayscale" : ""}`}
    />
  );
}
