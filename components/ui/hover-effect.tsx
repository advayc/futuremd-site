import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

// HoverEffect Component
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    linkedin: string;
    instagram: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item.link}
            className="relative group block h-full w-full cursor-pointer"
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
              <CardAvatar src={item.image} alt={item.title} />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
};

// Card Component
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col items-center justify-center",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-3 flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

// CardAvatar Component
export const CardAvatar = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-24 h-24 rounded-full mb-4", className)}
    />
  );
};

// CardTitle Component
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

// CardDescription Component
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm text-center",
        className
      )}
    >
      {children}
    </p>
  );
};

// Modal Component
export const Modal = ({
  item,
  onClose,
}: {
  item: {
    title: string;
    description: string;
    link: string;
    image: string;
    linkedin: string;
    instagram: string;
  };
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          onClick={onClose}
        >
          ✕
        </button>
        <CardAvatar src={item.image} alt={item.title} className="w-32 h-32 mb-4" />
        <CardTitle className="text-2xl">{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href={item.linkedin} target="_blank">
            <FaLinkedin className="text-blue-600 w-6 h-6" />
          </Link>
          <Link href={item.instagram} target="_blank">
            <FaInstagram className="text-pink-500 w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
