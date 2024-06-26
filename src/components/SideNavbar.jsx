import { Link } from "react-router-dom";
import { CUSTOMERS } from "@/lib/data";
import logo from "@/assets/images/logo.svg";

const renderNavItems = (items) => {
  return items.map(({ to, icon: Icon, label }) => (
    <Link
      key={label}
      to={to}
      className="flex items-center gap-3 rounded-lg px-3   py-4 text-white transition-all hover:text-primary">
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  ));
};

const SideNavbar = () => {
  return (
    <div className="work-sans bg-[#447407] hidden md:block w-[20%] h-screen overflow-y-auto ">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center my-5 px-6  lg:h-[60px] lg:px-10">
          <Link
            to="/"
            className="flex bg-white  rounded-md px-4 items-center gap-2 font-semibold">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-2 my-4 text-sm font-medium lg:px-4">
            <div className="mt-2">{renderNavItems(CUSTOMERS)}</div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
