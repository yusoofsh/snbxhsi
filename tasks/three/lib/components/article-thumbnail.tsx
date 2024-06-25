import Image from "next/image";

export default function ArticleThumbnail({
  src,
  alt,
  className,
}: Readonly<{
  src: string;
  alt: string;
  className?: string;
}>) {
  return (
    <Image
      priority
      src={src}
      alt={alt}
      width={900}
      height={600}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
