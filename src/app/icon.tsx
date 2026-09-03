import { ImageResponse } from "next/og";
import { GeneratedBrandIcon } from "@/components/branding/GeneratedBrandIcon";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(<GeneratedBrandIcon dimension={size.width} />, size);
}
