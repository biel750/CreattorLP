// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AntDesignLinkedinFilledsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function AntDesignLinkedinFilledsvgIcon(
  props: AntDesignLinkedinFilledsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 41"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M36.198 4.483H6.74a1.28 1.28 0 00-1.28 1.28v29.46c0 .708.572 1.28 1.28 1.28H36.2a1.28 1.28 0 001.28-1.28V5.763a1.28 1.28 0 00-1.28-1.28zM14.956 31.769h-4.75V16.487h4.75v15.282zm-2.373-17.372a2.754 2.754 0 110-5.508 2.754 2.754 0 010 5.508zm20.16 17.372h-4.746v-7.433c0-1.773-.032-4.05-2.47-4.05-2.47 0-2.85 1.928-2.85 3.922v7.56h-4.743v-15.28h4.555v2.09h.064c.633-1.202 2.182-2.47 4.495-2.47 4.811 0 5.696 3.166 5.696 7.28v8.382z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignLinkedinFilledsvgIcon;
/* prettier-ignore-end */
