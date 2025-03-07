import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between w-[90%] p-8">
      <p className="font-normal hover:cursor-pointer">
        <NavLink to="/">@Ayush Barnwal</NavLink>
      </p>
      <div className="flex justify-between gap-12">
        <p className="font-normal hover:cursor-pointer">
          <NavLink to="/">About</NavLink>
        </p>
        <p className="font-normal hover:cursor-pointer">Work</p>
        <p className="font-normal hover:cursor-pointer">
          <NavLink to="/contact">Contact</NavLink>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
