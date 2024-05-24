import contentful from "@/lib/contentful";
import Link from "next/link";
import SharedLinkBanner from "@/components/shared/SharedLinkBanner";
import Luminance from "@/lib/luminance";
import { cn } from "@/lib/cn";
import React from "react";
import GridBackground from "@/components/shared/GridBackground";
import { randomColorGenerate } from "@/lib/randomColorGenerate";

export default async function CategoriesHome() {
  const categories = await contentful.getCategories();
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <SharedLinkBanner additionalTitle={"Kategoriler"} />
      <GridBackground
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] ",
        )}
      />
      <div className="w-2/5 min-h-screen pt-40 flex items-center justify-start flex-col gap-24">
        <h2 className="font-bold text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatarem
          ipsum dolor sit amet, consectetur adipisicing elit. A beatae
          {/*Buradaki kategorilere göre kötülemeleri görüntüleyebilir, daha spesifik bir şekilde can sıkailirsiniz*/}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-y-1 w-2/3">
          {categories.map((cat, index) => {
            const randomColor = randomColorGenerate();
            return (
              <Link
                href={`/category/${cat}`}
                key={index}
                className="px-4 py-3 rounded-xl transition-all categoryCard flex justify-center items-center gap-1 font-bold"
                style={{
                  backgroundColor: randomColor,
                  color: Luminance.decide(randomColor),
                  transform: `rotate(${Math.random() * 30 - 20}deg)`,
                  transition: "all 100ms ease-in-out",
                  zIndex: 2,
                }}
              >
                <span className="text-xl">#</span>
                {cat}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
