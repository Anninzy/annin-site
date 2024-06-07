import { Head } from "$fresh/runtime.ts";

interface ButtonProps {
  href?: string;
  image?: string;
}

export default function () {
  function BlogButton({ href, image }: ButtonProps) {
    return (
      <a href={href}>
        <div class="h-[24rem] w-[12rem] rounded-xl bg-surface0 lg:h-[48rem] lg:w-[56rem]">
          <div class="h-2/3 w-full overflow-clip rounded-t-xl bg-surface1 ">
            <img class="size-full object-cover" src={image} alt="" />
          </div>
          <div class="p-6">
            <h1 class="text-xl lg:text-6xl">[Title]</h1>
            <p class="mt-1 lg:mt-6">[Description]</p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="I write useless things." />
      </Head>

      <div class="mt-12 flex h-min w-full flex-col items-center gap-12 py-12 lg:gap-36">
        <BlogButton
          href="/404"
          image="https://images.unsplash.com/photo-1715963433657-559b3ea01e0d"
        />
        <BlogButton />
        <BlogButton />
      </div>
    </>
  );
}
