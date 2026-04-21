"use client";

import Image from "next/image";

const Demo = () => {
  const imageUrl = "/images/placeholder.jpg";
  return (
    <div className="px-container z-50 min-h-screen w-full py-24 lg:py-14">
      <div className="grid grid-cols-6 items-center gap-8 lg:grid-cols-12">
        <div className="col-span-full flex flex-col gap-y-8 lg:col-start-4 lg:col-end-8">
          <div className="relative mb-1 aspect-850/478 w-full">
            <div>
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
          <div>
            <div className="relative mb-1 aspect-850/478 w-full">
              <Image
                className="h-auto w-full object-cover"
                fill
                src={imageUrl}
                loading="eager"
                sizes="333px"
                // loader={imageLoader}
                // width={850}
                // height={478}
                alt="Demo Image"
              />
            </div>
            <p className="italic">project name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Demo.displayName = "Demo";

export default Demo;
