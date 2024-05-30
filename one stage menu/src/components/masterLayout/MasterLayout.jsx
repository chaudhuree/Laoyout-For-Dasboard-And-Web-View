import React, { Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineLogout,
  AiOutlineMenuUnfold,
  AiOutlineUser,
} from "react-icons/ai";
import { BsHourglass, BsListNested } from "react-icons/bs";
import logo from "../../assets/images/logo.svg";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import "./sidebar.css";
import "./dropdownmenu.css";

const MasterLayout = ({children}) => {
  let contentRef,
    sideNavRef = useRef();

  const onLogout = () => {
    // removeSessions();
    // logout function
  };

  const MenuBarClickHandler = () => {
    let sideNav = sideNavRef;
    let content = contentRef;
    if (sideNav.classList.contains("side-nav-open")) {
      sideNav.classList.add("side-nav-close");
      sideNav.classList.remove("side-nav-open");
      content.classList.add("content-expand");
      content.classList.remove("content");
    } else {
      sideNav.classList.remove("side-nav-close");
      sideNav.classList.add("side-nav-open");
      content.classList.remove("content-expand");
      content.classList.add("content");
    }
  };

  return (
    <Fragment>
    {/*Navbar*/}
      <nav className="fixed w-full top-0 left-0 z-20 px-0 shadow-sm flex justify-between items-center lg:px-3 ">
        {/*navbar left*/}
        <div className="flex h-20 items-center">
          <a className="icon-nav m-0  h-5 " onClick={MenuBarClickHandler}>
            <AiOutlineMenuUnfold />
          </a>
          <img className="nav-logo mx-2 mt-2" src={logo} alt="logo" />
        </div>

        {/*dropdown menu*/}
        <div className="h-auto flex">
          <div className="user-dropdown">
            <img
              className="icon-nav-img icon-nav"
              src="https://i.ibb.co/r2LCwp1/chaudhuree.jpg"
              alt="user image"
            />
            <div className="user-dropdown-content ">
              <div className="mt-4 text-center flex flex-col justify-center items-center  gap-4">
                <img
                  className="icon-nav-img"
                  src="https://i.ibb.co/r2LCwp1/chaudhuree.jpg"
                  alt="user image"
                />
                <h6 className="text-xl font-semibold">sOhan</h6>
                <hr className="bg-[#a2a2a2] w-full h-[.5px] " />
              </div>
              <NavLink to="/Profile" className="side-bar-item">
                <AiOutlineUser className="side-bar-item-icon" />
                <span className="side-bar-item-caption">Profile</span>
              </NavLink>
              <a onClick={onLogout} className="side-bar-item">
                <AiOutlineLogout className="side-bar-item-icon" />
                <span className="side-bar-item-caption">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/*Sidebar*/}
      <div
        ref={(div) => {
          sideNavRef = div;
        }}
        className="side-nav-open"
      >
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2 "
          }
          to="/"
        >
          <RiDashboardLine className="side-bar-item-icon inline-block" />
          <span className="side-bar-item-caption inline-block ml-2">Dashboard</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/Create"
        >
          <AiOutlineEdit className="side-bar-item-icon inline-block" />
          <span className="side-bar-item-caption inline-block ml-2">Create New</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/All"
        >
          <BsListNested className="side-bar-item-icon inline-block" />
          <span className="side-bar-item-caption inline-block ml-2">New Task</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/Progress"
        >
          <BsHourglass className="side-bar-item-icon inline-block" />
          <span className="side-bar-item-caption inline-block ml-2">In Progress</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/Completed"
        >
          <AiOutlineCheckCircle className="side-bar-item-icon inline-block" />
          <span className="side-bar-item-caption inline-block ml-2">Completed</span>
        </NavLink>

        <NavLink
          className={(navData) =>
            navData.isActive
              ? "side-bar-item-active side-bar-item mt-2"
              : "side-bar-item mt-2"
          }
          to="/Canceled"
        >
          <MdOutlineCancelPresentation className="side-bar-item-icon inline-block" />
          <span className="side-bar-item-caption inline-block ml-2">Canceled</span>
        </NavLink>
      </div>

      {/*Content*/}
      <div ref={(div) => (contentRef = div)} className="content">
        {children}
      </div>
    </Fragment>
  );
};

export default MasterLayout;
