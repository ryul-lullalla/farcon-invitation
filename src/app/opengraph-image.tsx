import { ImageResponse } from "next/og";
import NextImage from "next/image";
export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-white">
        <NextImage src="/lum0x.png" alt={alt} width={600} height={400} />
      </div>
    ),
    {
      ...size,
    }
  );
}
