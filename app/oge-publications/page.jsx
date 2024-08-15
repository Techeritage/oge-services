"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function OgePublicationsPage() {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.3, // Adjust threshold as needed
    triggerOnce: true, // Only trigger the animation once
  });
  return (
    <main className="min-h-[100vh] overflow-x-hidden py-20 px-[3%] pt-[150px]">
      <h1
        ref={textRef}
        className={`animate__animated ${
          textInView
            ? "animate__backInDown visible-after-animation"
            : "hidden-before-animation"
        } headingBig lg:text-5xl text-center mx-auto`}
      >
        Welcome to <span className="text-primary">OGE Publications</span>{" "}
      </h1>
    </main>
  );
}
