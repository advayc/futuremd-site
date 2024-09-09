import { Inter } from "next/font/google";
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import { blogPosts, BlogPost } from '@/pages/blogs';
import { format, parseISO } from 'date-fns';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import Zoom from 'react-medium-image-zoom';

const inter = Inter({ subsets: ["latin"] });

type BlogPostPageProps = {
  post: BlogPost;
  mdxSource: MDXRemoteSerializeResult;
};

const BlogPostPage = ({ post, mdxSource }: BlogPostPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <main className={`${inter.className} min-h-screen pt-8 dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head>
        <title>{post.title} - FutureMD</title>
      </Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 md:px-8 lg:px-24 xl:px-36 w-full max-w-7xl mx-auto text-center relative">
        <button
          onClick={() => router.push('/blog')}
          className="absolute top-4 left-4 md:left-8 lg:left-12 text-dark-text hover:text-default-900 transition-colors"
        >
          &#60; Back to Blog
        </button>

        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-10 font-bold my-6 mb-4 text-center dark:text-white text-black">{post.title}</h1>
        <h2 className="text-base md:text-lg lg:text-xl font-semibold dark:text-dark-text text-dark-text mb-6 md:mb-8">
          {post.description}
        </h2>
        <time className="block text-left mb-3 font-semibold text-dark-text" dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row items-start justify-center md:justify-start">
          <div className="flex items-center space-x-3 rounded-lg cursor-pointer transition-colors px-4 py-1.5 hover:bg-zinc-300 dark:hover:bg-default-50 transition-colors -ml-4">
            <img className="w-10 h-10 md:w-11 md:h-11 rounded-full" src={post.author.avatar} alt={post.author.name} />
              <div>
                <p className="dark:text-gray-200 text-gray-900 font-semibold">{post.author.name}</p>
                <a href={post.author.link} className="text-zinc-500 text-sm dark:hover:text-hov hover:text-li transition-colors">
                @{post.author.user}
                </a>
              </div>
            </div>
         </div>
        </header>

      <div className="px-4 md:px-8 lg:px-24 xl:px-36 max-w-7xl mx-auto">
        <Zoom>
          <img className="mb-8 w-full h-64 md:h-72 lg:h-80 object-cover rounded-md imghov" src={post.image} alt={post.title} />
        </Zoom>
        <div className="markdown-content dark:text-white text-black mb-12">
          <MDXRemote {...mdxSource} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map(post => ({
    params: { slug: post.url.split('/').pop() || '' }
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = blogPosts.find(p => p.url.split('/').pop() === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxFilePath = path.join(process.cwd(), post.mdxFilePath);
  const mdxContent = fs.readFileSync(mdxFilePath, 'utf-8');

  const mdxSource = await serialize(mdxContent);

  return {
    props: {
      post,
      mdxSource,
    },
    revalidate: 10,
  };
};

export default BlogPostPage;