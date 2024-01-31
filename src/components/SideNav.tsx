import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./SideNav.scss";
import { Link } from "react-router-dom";

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideNavRef.current &&
      !sideNavRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => handleClickOutside(e);

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  return (
    <>
      <div
        className={`side-nav-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`side-nav-container ${isOpen ? "open" : ""}`}
        ref={sideNavRef}
      >
        <div className="toggle-button" onClick={toggleNav}>
          {isOpen ? (
            <IoClose style={{ fontSize: "1.3rem" }} />
          ) : (
            <GiHamburgerMenu style={{ fontSize: "1.3rem" }} />
          )}
        </div>
        {isOpen && (
          <div className="nav-menu">
            <div className="sidenav-links">
              <Link to="/home">View Appointements</Link>
            </div>
            <div className="sidenav-links">
              <Link to="/date-and-time-page">Make Appointements</Link>
            </div>
            <div className="sidenav-links">
              <Link to="/home">Logout</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideNav;
