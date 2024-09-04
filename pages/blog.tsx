import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const BlogPostCard = ({ title, url, image, description, date, author }: BlogPost) => {
  const handlePress = () => {
    console.log("Blog post clicked:", title);
  };

  return (
    <AnimatePresence>
      <motion.article
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        initial={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          onClick={handlePress}
        >
          <header>
            <a
              href={url}
              className="font-semibold"
              onClick={handlePress}
            >
              {title}
            </a>
          </header>
          <div className="pt-0 px-2 pb-1">
            <img className="mb-4" src={image} alt={title} />
            <p className="font-normal w-full text-default-600">{description}</p>
          </div>
          <footer className="flex justify-between items-center">
            <time className="block text-small text-default-500" dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <img className="w-10 h-10 rounded-full" src={author.avatar} alt="Author" />
          </footer>
        </div>
      </motion.article>
    </AnimatePresence>
  );
};

type BlogPost = {
  title: string;
  url: string;
  image: string;
  description: string;
  date: string;
  author: {
    avatar: string;
  };
};


const blogPosts: BlogPost[] = [
  {
    title: "Welcome to FutureMD!",
    url: "/blog/welcome",
    image: "/images/welcome-to-futuremd.jpg",
    description: "We are excited to launch FutureMD! Stay tuned for more updates.",
    date: "2024-05-24T00:00:00Z",
    author: {
      avatar: "/team/bobby.jpg"
    }
  },
  {
    title: "Join us to Path2Med",
    url: "/blog/join-us-to-path2med",
    image: "/images/join-us-to-path2med.jpg",
    description: "Discover Path2Med and how you can be a part of it.",
    date: "2024-07-28T00:00:00Z",
    author: {
      avatar: "/team/bobby.jpg"
    }
  }
];

export const BlogPostList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="mt-10 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {posts.map((post, idx) => (
        <BlogPostCard key={idx} {...post} />
      ))}
    </div>
  );
};

const Blog: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      document.documentElement.classList.add('transition-colors', 'duration-700');
      setTimeout(() => {
        document.documentElement.classList.remove('transition-colors', 'duration-700');
      }, 1700);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <main className={`min-h-screen pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Blog</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 pd-3 px-4 w-full max-w-9xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black">Blog</h1>
        <h2 className="text-center text-lg md:text-xl font-semibold dark:text-dark-text text-dark-text mb-8 ">
          All the latest news about FutureMD!
        </h2>
      </header>

      <section className="px-4">
        <BlogPostList posts={blogPosts} />
      </section>

      <Footer />
    </main>
  );
}

export default Blog;
