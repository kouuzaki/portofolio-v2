import { ICON } from "@/assets/icons/icon";
import { ButtonTailwind } from "@/components/ui/button-tailwind";
import { Highlight } from "@/components/ui/hero-highlight";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="gradient-dot-line">
        <div className="gradient-backdrop"></div>
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
            className="text-4xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Increase Value and Quality with Quality Works from{" "}
            <Highlight className="text-black dark:text-white">
              Bayu Putra Efendi.
            </Highlight>
          </motion.h1>
          <div className="flex pt-6 gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    target="_blank"
                    to="https://drive.google.com/file/d/1Qia2gMsJenge7WGzwQ6DCAnfPpeW4P4H/view?usp=sharing"
                  >
                    <ButtonTailwind
                      title="Download My CV"
                      icon={<ICON.FiDownload size={15} />}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Download My CV on Google Drive</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    to="https://www.linkedin.com/in/bayu-putra-efendi/"
                    target="_blank"
                  >
                    <ButtonTailwind
                      title="Contact me"
                      icon={<ICON.IoCallSharp size={15} />}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Contact on Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
