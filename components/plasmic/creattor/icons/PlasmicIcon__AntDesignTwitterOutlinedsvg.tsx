// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AntDesignTwitterOutlinedsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function AntDesignTwitterOutlinedsvgIcon(
  props: AntDesignTwitterOutlinedsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
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
          "M37.145 10.178a13.689 13.689 0 01-3.93 1.057 6.808 6.808 0 003.001-3.762 13.474 13.474 0 01-4.33 1.649 6.808 6.808 0 00-4.988-2.158 6.823 6.823 0 00-6.824 6.829c0 .528.064 1.057.168 1.565A19.396 19.396 0 016.169 8.213a6.777 6.777 0 00-.929 3.446 6.83 6.83 0 003.042 5.688 6.883 6.883 0 01-3.086-.869v.085a6.826 6.826 0 005.472 6.7 7.266 7.266 0 01-1.797.232 9.07 9.07 0 01-1.29-.104 6.837 6.837 0 006.38 4.735 13.68 13.68 0 01-8.473 2.918c-.572 0-1.1-.02-1.649-.084a19.327 19.327 0 0010.483 3.062c12.552 0 19.42-10.399 19.42-19.425 0-.296 0-.592-.02-.888a14.7 14.7 0 003.423-3.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignTwitterOutlinedsvgIcon;
/* prettier-ignore-end */
