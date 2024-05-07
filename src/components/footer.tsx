import { ICON } from "@/assets/icons/icon";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-8 md:py-12  dark:bg-grid-white/[0.02] bg-grid-black/[0.03] md:dark:bg-grid-white/[0.01] md:bg-grid-black/[0.05] relative border-t-2">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Contacts</h4>
          <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-400">
            <Link
              to="mailto:bayuputraefendiwebdeveloper@gmail.com"
              target="_blank"
            >
              <ICON.MdOutlineEmail className="w-5 h-5 inline-block mr-2 text-slate-700 dark:text-slate-500" />
              bayuputraefendiwebdeveloper@gmail.com
            </Link>
            <Link to="https://wa.me/6281380952872" target="_blank">
              <ICON.IoCallSharp className="w-5 h-5 inline-block mr-2 text-green-600 dark:text-green-500" />
              +62 813-8095-2872
            </Link>
            <Link to="" target="_blank">
              <ICON.FaLocationDot className="w-5 h-5 inline-block mr-2 text-red-600 dark:text-red-700" />
              Tangerang Banten
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Sosial Media</h4>
          <div className="flex space-x-4 ">
            <Link
              className="text-purple-800 dark:text-purple-500"
              to="https://www.instagram.com/kouuzaki"
              target="_blank"
            >
              <ICON.FaInstagram className="w-5 h-5 inline-block mr-2" />
            </Link>
            <Link
              className="text-blue-700 dark:text-blue-500"
              to="https://www.linkedin.com/in/bayu-putra-efendi/"
            >
              <ICON.FaLinkedin className="w-5 h-5 inline-block mr-2" />
            </Link>
            <Link className="" to="https://github.com/bbaygx">
              <ICON.FaGithub className="w-5 h-5 inline-block mr-2" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Copyright</h4>
          <p className="text-sm italic text-gray-800 dark:text-gray-300">
            © 2024 My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
