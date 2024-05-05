import { lazy } from "react";

const SignIn = lazy(() => import("./Sign-in"));
const SignUp = lazy(() => import("./Sign-up"));

export { SignIn, SignUp };
