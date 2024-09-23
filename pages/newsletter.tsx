import axios from "axios";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import Head from "next/head";
import { Footer } from "@/components/footer";
import { RiLoader5Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa"; 
import { IoMdClose } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export default function Newsletter() {
  const router = useRouter();

  const [mail, setMail] = useState<any | null>(null);
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

  const Subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    axios
      .put("/api/newsletter/mailingList", {
        mail: mail,
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
        } else {
          setLoading(false);
          setErrorMessage(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(String(err.message));
      });
  };

  const closeMessage = () => {
    setSuccess(false);
    setMessageState("");
  };

  return (
    <main className={`min-h-screen flex flex-col justify-center pt-8 ${inter.className} dark:bg-dark-bg bg-light-bg transition-colors duration-700`}>
      <Head>
        <title>FutureMD - Newsletter</title>
      </Head>
      <Navbar showAnimation={false} />
      <header className="w-full mx-auto">
        <div className="md:flex items-start justify-between mb-20 overflow-hidden">
          <div className="md:w-3/5 mt-16 ml-40">
            <h1 className="text-3xl md:text-5xl font-bold mt-16 mb-5 dark:text-white text-black whitespace-nowrap text-left">
              Subscribe To The <span className="dark:text-hov text-blue-600">Newsletter</span>
            </h1>
            <p className="text-left text-lg md:text-xl font-semibold dark:text-dark-text text-[#828282] mb-8">
              Receive monthly updates on <span className="dark:text-hov text-blue-600">FutureMD</span> & our events!
            </p>
            <form onSubmit={Subscribe} className="flex justify-start mb-16">
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 pr-2 pl-4 border border-gray-300 rounded-lg w-full md:w-80"
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
          <img src="/newsletter.png" alt="Newsletter" className="imghov w-80 md:w-2/4 h-auto" />
        </div>
      </header>

      {success && (
        <div
          id="success-message"
          className="fixed bottom-4 left-4 w-full max-w-md p-4 bg-green-500 text-white rounded-md shadow-lg flex items-center justify-between transition-opacity duration-1000"
          style={{ opacity: 1 }}
        >
          <FaCheck className="mr-2" size={20} />
          <span>{messageState}</span>
          <button onClick={closeMessage} className="text-white">
            <IoMdClose size={24} />
          </button>
        </div>
      )}

      {errorMessage && (
        <div className="fixed bottom-4 left-4 w-full max-w-md p-4 bg-red-500 text-white rounded-md shadow-lg flex items-center justify-between">
          <span>{errorMessage}</span>
          <button onClick={() => setErrorMessage("")} className="text-white">
            <IoMdClose size={24} />
          </button>
        </div>
      )}
      <Footer />
    </main>
  );
}
