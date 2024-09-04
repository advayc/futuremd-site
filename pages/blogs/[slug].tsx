import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import { blogPosts } from '@/pages/blog';

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

  const BlogPostPage = ({ post }: { post: BlogPost }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen pt-8 dark:bg-dark-bg bg-light-bg transition-colors duration-700">
      <Head><title>{post.title} - FutureMD</title></Head>
      <Navbar showAnimation={false} />
      <header className="pt-4 px-4 w-full max-w-7xl mx-auto text-center relative">
        <button
          onClick={() => router.push('/blogs')}
          className="absolute top-4 left-4 mb-8 -ml-3 text-default-500 hover:text-default-900 transition colors"
        >
          &#60;	Back to Blogs
        </button>
        
        <h1 className="text-4xl md:text-6xl font-bold my-8 mb-4 text-center dark:text-white text-black">{post.title}</h1>
        <h2 className="text-center text-lg md:text-xl font-semibold dark:text-dark-text text-dark-text mb-8">
          {post.description}
        </h2>
      </header>
      <section className="px-4">
        <img className="mb-4 w-full h-80 object-cover rounded-md" src={post.image} alt={post.title} />
        <p className="text-dark-text">{post.description}</p>
        <p className="mt-4 text-dark-text">{post.date}</p>
        <Footer />
      </section>
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

  return {
    props: {
      post: post || null
    },
    revalidate: 10 
  };
};

export default BlogPostPage;
