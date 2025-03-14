import { useEffect, useState, useCallback } from "react";
import IcBurgerClosed from "../../../../assets/ic-burger.svg";
import IcBurgerOpened from "../../../../assets/ic-burger-open.svg";
import { NavLink } from "react-router-dom";

const FloatingMenu = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  const handleMenuOpen = useCallback(() => {
    setMenuOpened(!menuOpened);
  }, [menuOpened]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrolled || menuOpened ? (
    <div>
      <div
        onClick={handleMenuOpen}
        style={{ backgroundColor: `${menuOpened ? "#F4F7FA" : "#0B0C0E"}` }}
        className="fixed top-[2em] right-[2em] z-3  w-[80px] h-[80px] rounded-full p-4 hover:cursor-pointer"
      >
        <img
          src={menuOpened ? IcBurgerOpened : IcBurgerClosed}
          alt="burger menu icon"
        />
      </div>
      {menuOpened ? (
        <div>
          <div className="fixed top-0 left-0 z-2 h-[100vh] bg-[#0B0C0E] opacity-40 w-full">a</div>
          <div className="fixed top-0 right-0 z-2 bg-[#0B0C0E] w-[45%] h-[100vh] px-[5em] py-[8em] flex flex-col justify-between">
            <ul className="text-[#F4F7FA] text-[60px] font-medium">
              <li className="group hover:list-disc list-none cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="group hover:list-disc list-none cursor-pointer">
                About
              </li>
              <li className="group hover:list-disc list-none cursor-pointer">
                Work
              </li>
              <li className="group hover:list-disc list-none cursor-pointer">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <ul className="flex text-[#F4F7FA] text-[18px] gap-8">
              <li>Linkedin</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Window</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
};

export default FloatingMenu;
