import { SignIn as SignInClerk } from "@clerk/clerk-react";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignInClerk signUpUrl="/auth/sign-up" />
    </div>
  );
}
