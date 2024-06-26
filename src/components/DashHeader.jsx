import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import profile from "../assets/images/profile.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { CUSTOMERS } from "@/lib/data";
import { Bell, Menu, Search } from "lucide-react";
import MemoDropdown from "@/icons/Dropdown";
import { Input } from "./ui/input";

const renderNavItems = (items) => {
  return items.map(({ to, icon: Icon, label }) => (
    <Link
      key={label}
      to={to}
      className="flex items-center gap-3 rounded-lg px-3 py-4 text-white transition-all hover:text-primary">
      <Icon className="h-5 w-5" />
      {label}
      {label === "My Profile" && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      )}
    </Link>
  ));
};

const DashHeader = () => {
  return (
    <>
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[75px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col bg-Primary-full">
            <nav className="grid gap-2 text-lg font-medium">
              <div className="mt-6">
                <h2 className="text-white text-lg mb-2">Customers</h2>
                {renderNavItems(CUSTOMERS)}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="w-full flex-1 mx-6 hidden sm:block">
          <form>
            <div className="flex w-[55%] items-center border rounded-md overflow-hidden">
              <Input
                type="search"
                placeholder="Search for anything..."
                className="flex-1 appearance-none outline-none border-none bg-background pl-4 py-2"
              />
              <Button className="bg-[#447407] hover:bg-[#447407] rounded-l-none px-6 py-[1.36rem]">
                <Search className="text-white h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>

        <Link
          className="underline underline-offset-2 text-[#213F7D] dark:text-white text-sm mx-4"
          to={"#"}>
          Docs
        </Link>
        <div className="relative  mx-4">
          <Bell className="h-8 w-8 " />
          <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs">
            2
          </Badge>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="icon" className="rounded-full">
                <span className="sr-only">Toggle user menu</span>
                <img src={profile} className="rounded-full" alt="" />
              </Button>
              <div className="cursor-pointer   md:flex items-center hidden">
                <h1 className="text-base font-thin text-[#213F7D] dark:text-white">
                  Adedeji
                </h1>
                <MemoDropdown className="h-5 w-5" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="text-[#213F7D] dark:text-white"
            align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
};

export default DashHeader;
