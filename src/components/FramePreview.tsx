import { Metadata } from "next";

interface FramePreviewProps {
  title: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
}

export async function generateFramePreview({
  title,
  description,
  imageUrl = "https://apemash.it/images/clashes/farcaster-vs-warpcast",
  buttonText = "Launch Frame",
}: FramePreviewProps): Promise<Metadata> {
  const appUrl = process.env.NEXT_PUBLIC_URL;
  const appName = process.env.NEXT_PUBLIC_FRAME_NAME;
  const splashImageUrl = `${appUrl}/splash_logo.png`;
  const iconUrl = `${appUrl}/icon.png`;

  const framePreviewMetadata = {
    version: "next",
    imageUrl,
    button: {
      title: buttonText,
      action: {
        type: "launch_frame",
        name: appName,
        url: appUrl,
        splashImageUrl,
        iconUrl,
        splashBackgroundColor: "#000000",
      },
    },
  };

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    other: {
      "fc:frame": JSON.stringify(framePreviewMetadata),
    },
  };
}

export default function FramePreview({
  title,
  description,
  imageUrl,
  buttonText,
}: FramePreviewProps) {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          {description && (
            <p className="text-white/80 text-sm mt-1">{description}</p>
          )}
        </div>
      </div>
      <div className="mt-4 text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
