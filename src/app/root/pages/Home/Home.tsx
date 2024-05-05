import { ICON } from "@/assets/icons/icon";
import { ButtonTailwind } from "@/components/ui/button-tailwind";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="hero" className="">
        <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] md:dark:bg-grid-white/[0.08] md:bg-grid-black/[0.08] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
          <div className="min-h-[70vh] lg:min-h-screen flex flex-col pt-36 md:pt-40 items-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              Increase Value and Quality with Quality Works from{" "}
              <Highlight className="text-black dark:text-white">
                Bayu Putra Efendi.
              </Highlight>
            </motion.h1>
            <div className="flex pt-6">
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/1Qia2gMsJenge7WGzwQ6DCAnfPpeW4P4H/view?usp=sharing"
              >
                <ButtonTailwind
                  title="Download My CV"
                  icon={<ICON.FiDownload />}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <span className="absolute z-10 top-0 h-0.5 bg-gradient-to-br from-blue-500 animate-pulse from-50% via-orange-500 to-purple-600 w-full inset-0 "></span>
        <HeroHighlight>
          <h1>Not Found</h1>
        </HeroHighlight>
      </section>
    </>
  );
}
