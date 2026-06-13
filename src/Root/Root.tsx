"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import Navber from "../Pages/Navber/Navber";
import Footer from "../Pages/Footer/Footer";

// react-animated-cursor reads `window` on import, so keep it client-only.
// Cast to any: the library supports object-form `clickables`, but its types don't.
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
}) as any;

const Root = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
      <Navber />
      {children}
      <Footer />
    </div>
  );
};

export default Root;
