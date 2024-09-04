import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head';
import { Footer } from '@/components/footer';
import { motion, AnimatePresence } from "framer-motion";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

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
        className="flex flex-col justify-center items-start p-4 border-transparent rounded-lg shadow-lg cursor-pointer dark:bg-default-400/10"
      >
        <a href={url} className="w-full">
          <div className="flex flex-col h-full">
            <p className="text-xl font-bold text-li dark:text-hov hover:underline">{title}</p>
            <div className="flex flex-col mt-2">
              <img className="w-full h-40 object-cover rounded-md mb-4" src={image} alt={title} />
              <p className="font-bold text-dark-text">{description}</p>
            </div>
            <footer className="flex justify-between items-center mt-2">
              <time className="text-small text-dark-text" dateTime={date}>
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
    user: string;
    link: string;
  };
  mdxFilePath: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Welcome to FutureMD!",
    url: "/blogs/welcome",
    image: "/meta.png",
    description: "We are excited to launch FutureMD! Stay tuned for more updates.",
    date: "2024-05-24T00:00:00Z",
    author: {
      avatar: "/team/bobby.jpg",
      name: "Bobby Fang",
      user: 'bobbyf0814',
      link: "https://www.linkedin.com/in/bobbyf0814/",
    },
    mdxFilePath: "public/blogposts/welcome.mdx",
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
    },
    mdxFilePath: "public/blogposts/path2med.mdx",
  }
];

export const BlogPostList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="flex justify-center">
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:max-w-3xl sm:max-2-xl px-4">
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

  // Sort blogPosts by date in descending order (most recent first)
  const sortedBlogPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className={`min-h-screen pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head><title>FutureMD - Blog</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 w-full max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 dark:text-white text-black">Blog</h1>
        <h2 className="text-lg md:text-xl font-semibold dark:text-dark-text text-dark-text mb-8">
          All the latest news about FutureMD!
        </h2>
      </header>

      <section className="px-4 mb-20">
        <BlogPostList posts={sortedBlogPosts} />
      </section>

      <Footer />
    </main>
  );
}

export default Blog;
