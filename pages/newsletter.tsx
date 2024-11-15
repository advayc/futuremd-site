import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import { Footer } from "@/components/footer";
import { RiLoader5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


export default function Newsletter() {
  const router = useRouter();

  const [mail, setMail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [messageState, setMessageState] = useState<string>("");

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

  const isValidEmail = (email: string | null): boolean => {
    if (!email) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const Subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    if (!isValidEmail(mail)) {
      setLoading(false);
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const res = await axios.put("/api/newsletter/mailingList", { mail });
      if (res.status === 200) {
        await axios.post('/api/newsletter/sendEmail', { email: mail });

        setLoading(false);
        setSuccess(true);
        setMessageState(res.data.message);
      } else {
        setLoading(false);
        setErrorMessage(res.data.message);
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  const closeMessage = () => {
    setSuccess(false);
    setErrorMessage("");
    setMessageState("");
  };

  return (
    <main className={`min-h-screen flex flex-col justify-center pt-8  dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head>
        <title>FutureMD - Newsletter</title>
      </Head>
      <Navbar showAnimation={false} />
      <header className="w-full mx-auto py-14">
        <div className="flex items-center justify-between mb-20 ml-40">
          <div className="w-2/3 mt-28">
            <h1 className="text-3xl md:text-5xl font-bold mb-5 dark:text-white text-black whitespace-nowrap text-left">
              Subscribe To The <span className="dark:text-hov text-blue-600">Newsletter</span>
            </h1>
            <p className="text-left text-lg md:text-xl font-semibold dark:text-dark-text text-[#828282] mb-8">
              Receive monthly updates on <span className="dark:text-hov text-blue-600">FutureMD</span> & our events!
            </p>
            <form onSubmit={Subscribe} className="flex justify-start mb-16">
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 pr-2 pl-4 border border-gray-300 dark:border-dprimary rounded-lg w-full md:w-80"
                required
                onChange={(e) => setMail(e.target.value)}
              />
              <button
                disabled={loading}
                type="submit"
                className="ml-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                {!loading ? (
                  "Subscribe"
                ) : (
                  <div className="flex w-full items-center justify-center">
                    <RiLoader5Fill className="w-8 animate-spin" />
                  </div>
                )}
              </button>
            </form>
          </div>
          <div className="w-[50%] flex justify-end mr-24">
            <img src='/newsletter.png' alt="Newsletter" className="imghov" />
          </div>
        </div>
      </header>

      {success && (
        <div className={`flex w-full max-w-md overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 fixed bottom-4 left-4 pr-2 transition-opacity duration-300 ease-in-out opacity-100`}>
          <div className="flex items-center justify-center bg-emerald-500 px-4">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3 flex-1">
            <div className="mx-3">
              <span className="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Thank you for subscribing to our newsletter! Your email has been added to our mailing list! ❤️
              </p>
            </div>
          </div>
          <button onClick={closeMessage} className="text-black">
            <IoMdClose size={24} />
          </button>
        </div>
      )}

      {errorMessage && (
        <div className={`flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 fixed bottom-4 left-4 pr-4 transition-opacity duration-300 ease-in-out opacity-100`}>
          <div className="flex items-center justify-center bg-red-500 px-4">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
            </svg>
          </div>
          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                <span>Request failed. Please <a href="/contact" className="text-li">contact us</a> or try again later!</span>
              </p>
            </div>
          </div>
          <button onClick={() => setErrorMessage("")} className="text-black">
            <IoMdClose size={24} />
          </button>
        </div>
      )}

      <Footer />
    </main>
  );
}
