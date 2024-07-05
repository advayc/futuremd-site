import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    role: string;
    description: string;
    image: string;
    linkedin: string;
    instagram: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [selectedItem, setSelectedItem] = useState<any>(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedItem(item)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardImage src={item.image} alt={item.title} />
              <CardTitle>{item.title}</CardTitle>
              <CardRole>{item.role}</CardRole>
            </Card>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="relative bg-black p-8 rounded-2xl border border-white/[0.2] max-w-4xl mx-auto flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-none">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-48 h-48 rounded-full mb-4" />
            </div>
            <div className="flex-auto pl-8">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-400 transition">
                <FaTimes size={24} />
              </button>
              <div className="flex flex-col items-start">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h2>
                <p className="text-lg text-zinc-400 mb-4">{selectedItem.description}</p>
                <div className="flex space-x-4">
                  <Link href={selectedItem.linkedin}>
                    <FaLinkedin className="text-white hover:text-gray-400 transition" size={24} />
                  </Link>
                  <Link href={selectedItem.instagram}>
                    <FaInstagram className="text-white hover:text-gray-400 transition" size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-transparent border-white/ group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export const CardImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <div className="flex justify-center">
      <img src={src} alt={alt} className="w-40 h-40 rounded-full mb-4" />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("dark:text-zinc-100 text-black font-bold tracking-wide text-2xl text-center", className)}>
      {children}
    </h4>
  );
};

export const CardRole = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("dark:text-zinc-400 text-zinc-600 tracking-wide text-1xl text-center font-extrabold", className)}>
      {children}
    </p>
  );
};
