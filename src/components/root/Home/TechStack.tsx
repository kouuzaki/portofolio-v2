import { IMAGE } from "@/assets/images/image";
import { STACK } from "@/assets/stacks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/clerk-react";

export function TechStack() {
  const { user } = useUser();
  return (
    <div className="pl-6">
      <div className="relative md:dark:bg-grid-white/[0.02] bg-grid-black/[0.06] dark:bg-grid-white/[0.05] md:bg-grid-black/[0.1] bg-background border border-gray-400 size-[23rem] rounded-full -translate-x-9 md:translate-x-9">
        <div className="absolute top-8 left-4 " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img src={STACK.Docker} className="" />
            </div>
          </div>
        </div>
        <div className="absolute top-40 -left-9 " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img src={STACK.Typescript} className="" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-3 " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img src={STACK.Javascript} className="" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-8 left-36  " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img src={STACK.Next_JS} className="" />
            </div>
          </div>
        </div>
        <div className="absolute right-6 bottom-5  " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img
                src={STACK.Github}
                className="dark:bg-white dark:rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute -right-8 bottom-36  " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img src={STACK.React} className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-6  " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img src={STACK.Javascript} className="" />
            </div>
          </div>
        </div>

        <div className="absolute right-6 top-6  " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img src={STACK.Jest} className="" />
            </div>
          </div>
        </div>
        <div className="absolute right-40 -top-6  " id="stack">
          <div className="relative p-0.5 ">
            <div className="gradasi_color"></div>
            <div className="bg-background p-2 rounded-lg border size-16 relative">
              <img src={STACK.Redux} className="" />
            </div>
          </div>
        </div>

        <div className="absolute left-16 top-16 border border-gray-400 size-[15rem] rounded-full">
          <div className="relative h-full">
            <div className="absolute top-20 left-20 size-20 p-1 rounded-full bg-background">
              <span className="inset-0 rounded-full absolute bg-gradient-to-tr from-blue-700 via-red-600 to-orange-600"></span>
              <div className="relative h-full rounded-full">
                <Avatar className="h-full w-full">
                  <AvatarFallback>
                    <img src={IMAGE.Gambar15} alt="" />
                  </AvatarFallback>
                  <AvatarImage src={user?.imageUrl} />
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
