import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.jpeg";
import logo from "../../assets/images/logo.svg";

export default function Login() {
  const navigate = useNavigate();
  return (
    <main className="hsection">
      <div className="bg-gray-100 flex items-center justify-center md:min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:h-auto lg:h-screen w-full md:space-x-6 max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg md:overflow-hidden">
          <div className="relative md:flex hidden items-center justify-end p-2 lg:p-2">
            <img
              src={login}
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
                <h1 className="text-3xl font-bold">Create an account</h1>
                <p className="text-gray-400">
                  Don&apos;t have an account?
                  <Link to="/register" className="underline">
                    Sign up
                  </Link>
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
                <div className="space-y-4">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Checkbox id="remember" />
                      <Label
                        htmlFor="remember"
                        className="ml-1 text-sm text-gray-400">
                        Remember me
                      </Label>
                    </div>
                    <Link
                      className="text-sm underline block text-gray-500"
                      to="/forgot-password">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    onClick={() => navigate("/user")}
                    type="submit"
                    className="w-full bg-[#447407] hover:bg-[#447407]">
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
