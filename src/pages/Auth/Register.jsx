import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import legislator from "../../assets/images/legislator.jpeg";
import logo from "../../assets/images/logo.svg";

export default function Register() {
  return (
    <main className="hsection">
      <div className="bg-gray-100 flex items-center justify-center md:min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:h-auto lg:h-screen w-full md:space-x-6 max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg md:overflow-hidden">
          <div className="relative md:flex hidden items-center justify-end p-2 lg:p-2">
            <img
              src={legislator}
              alt="Sign up"
              width={650}
              height={800}
              className="max-h-[90vh] w-auto object-cover rounded-lg shadow-md"
            />
            <img
              src={logo}
              alt="Logo"
              className="absolute top-16 right-[24rem] w-32 h-auto hsection"
            />
          </div>
          <div className="flex items-center md:flex-row  flex-col justify-start p-4 lg:p-4">
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-auto mb-4 md:hidden block"
            />
            <div className="w-full max-w-md space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">Create an account</h1>
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link to="/" className="underline">
                    Sign in
                  </Link>
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (123) 456-7890"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">State of Origin</Label>
                    <Input id="state" placeholder="California" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="constituency">Constituency</Label>
                    <Input
                      id="constituency"
                      placeholder="District 1"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-start">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="ml-2 text-sm">
                    I agree to the terms and conditions
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#447407] hover:bg-[#447407]">
                  Sign up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
