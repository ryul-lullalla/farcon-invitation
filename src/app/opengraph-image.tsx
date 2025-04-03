import { ImageResponse } from "next/og";
export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      // <div tw="h-full w-full flex flex-col justify-center items-center relative p-10">
      //   <p tw="text-white text-4xl font-bold">123123</p>
      // </div>
      <div
        tw="h-full w-full flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: "url(https://yoink.party/frame.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    ),
    {
      ...size,
    }
  );
  // return (
  //   <div tw="h-full w-full flex flex-col justify-center items-center relative bg-white">
  //     <NextImage src="/splash_logo.png" alt={alt} width={600} height={400} />
  //   </div>
  // );
}
