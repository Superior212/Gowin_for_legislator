import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import reset from "../../assets/images/reset.jpeg";
import logo from "../../assets/images/logo.svg";

export default function ForgetPassword() {
  return (
    <main className="hsection">
      <div className="bg-gray-100 flex items-center justify-center md:min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:h-auto lg:h-screen w-full md:space-x-6 max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg md:overflow-hidden">
          <div className="relative md:flex hidden items-center justify-end p-2 lg:p-2">
            <img
              src={reset}
              alt="Sign up"
              width={650}
              height={800}
              className="max-h-[90vh] w-auto object-cover rounded-lg shadow-md"
            />
            <img
              src={logo}
              alt="Logo"
              className="absolute top-20 right-[19rem] w-32 h-auto hsection"
            />
          </div>
          <div className="flex items-center md:flex-row flex-col justify-start p-4 lg:p-4">
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-auto mb-4 md:hidden block"
            />
            <div className="w-full max-w-md space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">Forgot Password</h1>
                <p className="text-gray-400 text-sm">
                  Enter your email to reset your password.
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                <div className="mt-4">
                  <Button
                    type="submit"
                    className="w-full bg-[#447407] hover:bg-[#447407]">
                    Reset Password
                  </Button>
                </div>
                <div className="flex justify-center  items-center">
                  <Link
                    className="text-sm underline block text-gray-500"
                    to="/">
                    Back to Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
