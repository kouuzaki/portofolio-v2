import { ICON } from "@/assets/icons/icon";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function NotFound({
  message,
  statusTextCode,
  mode = "bug",
}: {
  message: string;
  statusTextCode: string;
  mode?: "bug" | "maintenance";
}) {
  return (
    <div className="flex gradient-dot-line-small flex-col items-center justify-center h-screen ">
      <div className="max-w-md px-4 py-8 space-y-4 text-center">
        {mode == "bug" ? (
          <ICON.FaBug className="mx-auto h-16 w-16 text-red-500" />
        ) : mode == "maintenance" ? (
          <ICON.FaTools className="mx-auto h-16 w-16 text-red-500" />
        ) : (
          ""
        )}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {statusTextCode}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{message}</p>
        <Link to="/">
          <Button className="mt-6">Back to Main Page</Button>
        </Link>
      </div>
    </div>
  );
}
