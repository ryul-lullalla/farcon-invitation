import { ImageResponse } from "next/og";
import NextImage from "next/image";
const alt = process.env.NEXT_PUBLIC_FRAME_NAME || "Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

// dynamically generated OG image for frame preview
export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center itemster relative bg-white">
        <NextImage src="/lum0x.png" alt={alt} width={600} height={400} />
      </div>
    ),
    {
      ...size,
    }
  );
}
