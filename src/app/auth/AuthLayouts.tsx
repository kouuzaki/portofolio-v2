import { Outlet } from "react-router-dom";

export default function AuthLayouts() {
  return (
    <div>
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <Outlet />
      </div>
    </div>
  );
}
