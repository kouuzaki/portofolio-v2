import { Footer } from "@/components/footer";
import { Header } from "@/components/root/Header";
import { Outlet } from "react-router-dom";

export default function RootLayouts() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
