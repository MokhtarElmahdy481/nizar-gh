import { Typography } from "@/configurations/materialconfig";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function AllBlogs({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="flex flex-col justify-center" >
        {blogs.map((blog, i) => (
      <div className={twMerge("grid py-5 grid-cols-1 md:grid-cols-12 gap-4",i == blogs.length - 1? "" : "border-b-2")} key={i}>
        <div className="md:col-span-2" >
          <Image
            width={544}
            height={144}
            className="h-36 w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
        </div>
        <div className="md:col-span-10">
          <div className="">
            <Typography variant="h5">Praesent vel interdum</Typography>
            <Typography variant="lead">
              Praesent vel interdum nulla, et volutpat est. Praesent consectetur
              aliquet ligula.
            </Typography>
          </div>
        </div>
      </div>
        
        ))}
    </div>
  );
}
