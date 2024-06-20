import { Head } from "$fresh/runtime.ts";

interface ButtonProps {
  href?: string;
  image?: string;
}

export default function () {
  function AppButton({ href, image }: ButtonProps) {
    return (
      <div class="h-48 w-96 overflow-clip rounded-3xl bg-surface1" href={href}>
        <a href={href}>
          <img class="size-full object-cover" src={image} alt="" />
        </a>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Apps</title>
        <meta name="description" content="A collection of boring web apps." />
      </Head>

      <div class="mt-12 flex h-min w-full flex-wrap content-start justify-center gap-6 px-[25%] py-12">
        <AppButton
          href="/apps/ttt"
          image="https://images.unsplash.com/photo-1621839673705-6617adf9e890"
        />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
        <AppButton />
      </div>
    </>
  );
}
