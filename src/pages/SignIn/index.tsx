import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import { Auth } from "@components/Auth";

export function SignIn() {
  return (
    <main>
      <Auth>
        <ClerkSignIn signUpUrl="/sign-up" />
      </Auth>
    </main>
  );
}
