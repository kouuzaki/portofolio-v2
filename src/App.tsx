import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { ClerkProvider } from "@clerk/clerk-react";
import { LoadingUI } from "./components/loading-ui";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="kou-blog-theme">
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <Suspense fallback={<LoadingUI />}>
            <RouterProvider router={routes} />
          </Suspense>
        </ClerkProvider>
      </ThemeProvider>
    </>
  );
}
