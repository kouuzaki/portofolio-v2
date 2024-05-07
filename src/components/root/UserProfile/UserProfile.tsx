import { IMAGE } from "@/assets/images/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

export function UserProfile() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { user } = useUser();

  return (
    <div className="flex items-center space-x-5 md:space-x-10">
      <ModeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarFallback>
              <img src={IMAGE.Gambar15} alt="Default Gambar" />
            </AvatarFallback>
            <AvatarImage src={user?.imageUrl} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-3">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignedOut>
              <Link to="/auth/sign-in" className="w-full">
                Sign in
              </Link>
            </SignedOut>
            <SignedIn>
              <span
                onClick={() => {
                  signOut();
                  navigate("/auth.sign-in");
                }}
                className="w-full"
              >
                Sign out
              </span>
            </SignedIn>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
