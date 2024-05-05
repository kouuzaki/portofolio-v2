import { ICON } from "@/assets/icons/icon";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { IMAGE } from "@/assets/images/image";
import { Link, NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { UserProfile } from "./UserProfile/UserProfile";

const NavList = [
  {
    path: "/",
    pathName: "Home",
  },
  {
    path: "/article",
    pathName: "Article",
  },
  {
    path: "/about",
    pathName: "About",
  },
  {
    path: "https://github.com/bbaygx",
    pathName: "Github",
  },
];

export function Header() {
  return (
    <header className="sticky z-50 top-0 border-border/40 container py-3 border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between">
        <div className="md:hidden" id="mobile-menu">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <ICON.FiMenu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu </SheetTitle>
                <SheetDescription>Exprole menu disini</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-3 py-12">
                {NavList.map((item, i) => (
                  <NavLink to={item.path} key={i}>
                    {({ isActive }) => (
                      <div className="">
                        <Button
                          variant={isActive ? "link" : "ghost"}
                          className={isActive ? "underline" : ""}
                        >
                          {item.pathName}
                        </Button>
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden  md:flex space-x-11" id="desktop-menu">
          <div>
            <Link to="/">
              <img src={IMAGE.Gambar9} alt="Logo" className="h-9" />
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex md:space-x-10">
              {NavList.map((item, i) => (
                <NavigationMenuItem key={i} className="flex">
                  <NavLink to={item.path}>
                    {({ isActive }) => (
                      <div className="flex">
                        <span
                          className={`text-sm font-medium ${
                            isActive ? "dark:text-white" : "text-gray-600"
                          }`}
                        >
                          {item.pathName}
                        </span>
                      </div>
                    )}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <UserProfile />
      </div>
    </header>
  );
}
