import Image from "next/image";

export default function ArticleThumbnail({
  src,
  alt,
  className,
}: Readonly<{ src: string; alt: string; className?: string }>) {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <Image
        priority
        src={src}
        alt={alt}
        width={900}
        height={600}
        className="w-full  object-cover"
      />
    </div>
  );
}
