import { ICON } from "@/assets/icons/icon";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TechStack } from "./TechStack";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function Skills() {
  return (
    <section className="relative">
      <span className="absolute z-10 top-0 h-0.5 bg-gradient-to-br from-blue-500 animate-pulse from-50% via-orange-500 to-purple-600 w-full inset-0 "></span>
      <HeroHighlight>
        <div className="min-h-screen container sm:flex sm:justify-center overflow-x-hidden py-32">
          <div className="md:grid md:grid-cols-5 ">
            <div className="pb-32 md:col-span-3 flex flex-col space-y-3">
              <h1 className="text-2xl pb-6 md:text-4xl max-w-sm leading-relaxed lg:leading-snug md:max-w-lg font-bold text-pretty">
                <TextGenerateEffect words="Exceed Expectations with the Craftsmanship of Bayu Putra Efendi" />
              </h1>

              <div className="flex space-x-4">
                <ICON.FaCheckCircle size={25} className="text-blue-500" />
                <h1 className="font-semibold text-base">Code efficiency</h1>
              </div>

              <div className="flex space-x-4">
                <ICON.FaCheckCircle size={25} className="text-blue-500" />
                <h1 className="font-semibold text-base">
                  Work with all your might
                </h1>
              </div>

              <div className="flex space-x-4">
                <ICON.FaCheckCircle size={25} className="text-blue-500" />
                <h1 className="font-semibold text-base">
                  Have more than 3 years of experience
                </h1>
              </div>
              <div className="flex space-x-4">
                <ICON.FaCheckCircle size={25} className="text-blue-500" />
                <h1 className="font-semibold text-base">
                  Strong with Typescript code
                </h1>
              </div>
            </div>
            <TechStack />
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
