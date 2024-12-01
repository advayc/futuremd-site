import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { Key, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import Link from "next/link";
import "react-medium-image-zoom/dist/styles.css";
import { Footer } from "@/components/footer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const galleryImages = [
  { src: "/gallery/first.jpg" },
  { src: "/gallery/second.jpg" },
  { src: "/gallery/third.jpg" },
];

export async function getServerSideProps() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  const res = await fetch(
    `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
  );
  const data = await res.json();

  const filteredImages = data.data || [];

  return {
    props: {
      instagramImages: filteredImages,
    },
  };
}

export default function Media({ instagramImages }: { instagramImages: any[] }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      document.documentElement.classList.add("transition-colors", "duration-700");
      setTimeout(() => {
        document.documentElement.classList.remove("transition-colors", "duration-700");
      }, 1700);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <main
      className={`min-h-screen flex flex-col items-center pt-8 dark:bg-dark-bg bg-light-bg transition-colors duration-700`}
    >
      <Head>
        <title>FutureMD - Media</title>
      </Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 w-full max-w-9xl">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black">
          Our Media
        </h1>
        <p className="text-center text-lg md:text-2xl font-semibold dark:text-dark-text text-dark-text">
          FutureMD captured in some stunning photos!
        </p>
      </header>

      <h2 className="text-1xl md:text-3xl font-bold my-8 mb-4 text-center dark:text-white text-black">
        Check out our{" "}
        <Link
          href="https://www.instagram.com/futuremd_team"
          target="_blank"
          className="dark:text-white dark:hover:text-hov text-black hover:text-li transition delay-75"
        >
          Instagram Page!
        </Link>
      </h2>

      <section className="flex justify-around py-5 space-x-10">
        {instagramImages.filter(image => image.media_url).length > 0 ? (
          instagramImages
            .filter(image => image.media_url)
            .slice(0, 3)
            .map((image, index) => (
              <a
                key={index}
                href={image.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src={image.media_type === "VIDEO" ? image.thumbnail_url! : image.media_url}
                  alt={`Instagram post ${index + 1}`}
                  width={350}
                  height={350}
                  className="h-[350px] w-[350px] object-cover rounded-lg"
                  unoptimized
                />
              </a>
            ))
        ) : (
          <p className="text-center dark:text-white text-black">No images available</p>
        )}
      </section>

      <section id="gal" className="max-w-9xl py-8">
        <h3 className="text-2xl md:text-5xl font-bold mb-8 text-center dark:text-white text-black">
          Gallery Showcase!
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <Zoom>
                <Image
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  width={350}
                  height={350}
                  className="h-[350px] w-[350px] object-cover"
                />
              </Zoom>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}