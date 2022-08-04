// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AntDesignFacebookFilledsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function AntDesignFacebookFilledsvgIcon(
  props: AntDesignFacebookFilledsvgIconProps
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
          "M36.21 4.483H6.751a1.28 1.28 0 00-1.28 1.28v29.46c0 .708.572 1.28 1.28 1.28h29.46a1.28 1.28 0 001.28-1.28V5.763a1.28 1.28 0 00-1.28-1.28zm-3.698 9.346h-2.558c-2.005 0-2.393.953-2.393 2.354v3.085h4.787l-.625 4.832h-4.162v12.404H22.57v-12.4h-4.175v-4.835h4.175v-3.563c0-4.134 2.525-6.388 6.215-6.388 1.77 0 3.287.132 3.73.192v4.319h-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignFacebookFilledsvgIcon;
/* prettier-ignore-end */
