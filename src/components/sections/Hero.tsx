import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
// import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100); 

      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <span className={styles.heroSubText}>{displayText}</span>;
};


const Hero: React.FC = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            <TypingText text={config.hero.p[0]} />
            <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <Link to="https://drive.google.com/file/d/1atO-ky4vr7mspXzpALT4ofBQYiZivS33/view?usp=sharing">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg mt-4"
            >
              Resume
            </motion.button>
          </Link>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
