import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const BlogPostCard = ({ title, url, image, description, date, author }: BlogPost) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.article
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        initial={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
      >
        <a href={url}>
        <div className="justify-center items-center p-4 h-full border-transparent text-start dark:bg-default-400/10 rounded-lg shadow-lg cursor-pointer">
            <p className="ml-2 text-xl text-li dark:text-hov font-bold hover:underline">
              {title}
          </p>
          <div className="p-2 mt-1">
            <img className="mb-4 w-full h-40 object-cover rounded-md" src={image} alt={title} />
            <p className="font-bold w-full text-dark-text">{description}</p>
          </div>
          <footer className="flex justify-between items-center mt-2">
            <time className="ml-2 block text-small text-dark-text" dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <img className="w-10 h-10 rounded-full" src={author.avatar} alt="Author" />
          </footer>
        </div>
        </a>
      </motion.article>
    </AnimatePresence>
  );
};

export type BlogPost = {
  title: string;
  url: string;
  image: string;
  description: string;
  date: string;
  author: {
    avatar: string;
    name: string;
    user: string
    link: string
  };
};

export const blogPosts: BlogPost[] = [
  {
    title: "Welcome to FutureMD!",
    url: "/blogs/welcome",
    image: "/events/path2medc.png",
    description: "We are excited to launch FutureMD! Stay tuned for more updates.",
    date: "2024-05-24T00:00:00Z",
    author: {
      avatar: "/team/bobby.jpg",
      name: "Bobby Fang",
      user: 'bobbyf0814',
      link: "https://www.linkedin.com/in/bobbyf0814/",
    }
  },
  {
    title: "Join us to Path2Med",
    url: "/blogs/join-us-to-path2med",
    image: "/events/path2med.png",
    description: "Discover Path2Med and how you can be a part of it.",
    date: "2024-07-28T00:00:00Z",
    author: {
      avatar: "/team/bobby.jpg",
      name: "Bobby Fang",
      user: 'bobbyf0814',
      link: "https://www.linkedin.com/in/bobbyf0814/",
    }
  }
];

export const BlogPostList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className=" flex justify-center">
      <div className="mb-10 mt-2 grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-3xl">
        {posts.map((post, idx) => (
          <BlogPostCard key={idx} {...post} />
        ))}
      </div>
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
      <header className="pt-4 pd-3 px-4 w-full max-w-7xl mx-auto text-center">
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
