import { SignUp as ClerkSignUp } from "@clerk/clerk-react";
import { Auth } from "@components/Auth";

export function SignUp() {
  return (
    <main>
      <Auth>
        <ClerkSignUp signInUrl="/" />
      </Auth>
    </main>
  );
}
