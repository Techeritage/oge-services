import { ArrowRight } from "iconsax-react";
import React from "react";

export default function Button({ text, className, icon }) {
  return (
    <button className={className}>
      {text}
      {icon && <ArrowRight size="20" color="white" />}
    </button>
  );
}
