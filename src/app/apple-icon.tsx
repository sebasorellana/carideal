import { ImageResponse } from "next/og";
import { GeneratedBrandIcon } from "@/components/branding/GeneratedBrandIcon";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<GeneratedBrandIcon dimension={size.width} />, size);
}
