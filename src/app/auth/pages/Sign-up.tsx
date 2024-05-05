import { SignUp as SignUpClerk } from "@clerk/clerk-react";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUpClerk signInUrl="/auth/sign-in" />
    </div>
  );
}
