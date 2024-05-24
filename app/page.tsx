import Navbar from "@/components/shared/Navbar";
import SummaryCard from "@/components/home/SummaryCard";
import React from "react";
import Link from "next/link";
import Contentful from "@/lib/contentful";
import { Post } from "@/contentfulTypes";
import dayjs from "dayjs";

export default async function Home() {
  const posts = await Contentful.getPosts(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="p-24 pt-16">
        <nav className="w-full sticky">
          <Navbar />
        </nav>
        <div className="w-full flex justify-center items-center pt-24 text-5xl">
          <h1 className="w-1/2 bg-gradient-to-r from-green-600 via-green-800 to-green-500 bg-clip-text text-transparent overflow-visible bg-center min-h-[150px]">
            Ürünler düşebileceği en kötü kullanıcının eline düşünce böyle oluyor
            işte
          </h1>
        </div>
        <article className="w-full pt-24 px-40 flex flex-wrap justify-start gap-10">
          {posts.map((i) => {
            const fields = i.fields as unknown as Post;
            console.log(i);
            return (
              <SummaryCard
                title={fields.title as string}
                imageSrc={`https://${(
                  fields.postimage.fields.file?.url as string
                ).replace("//", "")}`}
                key={i.sys.id as string}
                summary={fields.midliner as string}
                postUrl={`/post/${i.sys.id}`}
                date={i.sys.updatedAt}
              />
            );
          })}
        </article>
      </div>
      <footer className="w-full fixed bottom-0 right-16 flex justify-end items-center pb-6">
        <Link href={"https://gokyalc.in"} target={"_blank"}>
          A. Göktuğ Yalçın - {dayjs().year()}
        </Link>
      </footer>
    </main>
  );
}
