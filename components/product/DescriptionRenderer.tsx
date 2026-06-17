import Image from "next/image";
import { DescriptionBlock } from "./Tabs";

interface DescriptionRendererProps {
  blocks: DescriptionBlock[];
}

export default function DescriptionRenderer({
  blocks,
}: DescriptionRendererProps) {
  return (
    <div className="space-y-6 text-gray-700 text-sm sm:text-base">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="text-xl font-semibold text-black"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p key={index} className="leading-7">
                {block.text}
              </p>
            );

          case "image":
            return (
              <Image
                key={index}
                src={block.image}
                alt=""
                width={1200}
                height={800}
                className="w-full object-cover rounded-lg"
              />
            );

          case "images":
            return (
              <div
                key={index}
                className="grid gap-2 sm:gap-4 grid-cols-1"
              >
                {block.image.map((img, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={img}
                    alt=""
                    width={1200}
                    height={800}
                    className="w-full rounded-lg"
                  />
                ))}
              </div>
            );

          case "list":
            return (
              <ul
                key={index}
                className="list-disc pl-5 space-y-2"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}