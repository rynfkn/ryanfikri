import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeSplash = ({ duration = 1250, onComplete }) => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const greetings = [
    "Hello!",
    "¡Hola!",
    "Bonjour!",
    "Halo!",
    "こんにちは！",
    "你好！",
    "안녕하세요!",
  ];

  useEffect(() => {
    let timeoutId;

    const cycleGreetings = (index = 0) => {
      const nextIndex = index === greetings.length - 1 ? 0 : index + 1;
      const delay = index === 0 ? 200 : 200;

      timeoutId = setTimeout(() => {
        setCurrentLanguage(nextIndex);
        cycleGreetings(nextIndex);
      }, delay);
    };

    cycleGreetings(0);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 400);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timer);
    };
  }, [duration, greetings.length, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -200,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <h1 className="text-5xl md:text-5xl font-bold tracking-tight select-none">
            {greetings[currentLanguage]}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeSplash;
