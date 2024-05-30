import React, { Fragment, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineBank, AiOutlineLogout, AiOutlineMenu, AiOutlineUser,AiOutlineUnorderedList } from 'react-icons/ai';
import { BsBagPlus, BsBagX, BsBox, BsCartPlus, BsCircle, BsGraphUp, BsPeople } from 'react-icons/bs';
import {  IoCreateOutline } from 'react-icons/io5';
import { RiDashboardLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import logo from "../../assets/images/logoTwo.svg";
import CustomAccordion from './CustomAccordion';
import './style.css'
import './customaccordion.css';
import './dropdownmenu.css';
import './sidebar.css';
import './scrollbar.css';


const MasterLayout = (props) => {
  let contentRef, sideNavRef, topNavRef = useRef();

  const MenuBarClickHandler = () => {
    let sideNav = sideNavRef;
    let content = contentRef;
    let topNav = topNavRef;
    if (sideNav.classList.contains('side-nav-open')) {
      sideNav.classList.add('side-nav-close');
      sideNav.classList.remove('side-nav-open');
      content.classList.add('content-expand');
      content.classList.remove('content');
      topNav.classList.remove('top-nav-open');
      topNav.classList.add('top-nav-close');
    } else {
      sideNav.classList.remove('side-nav-close');
      sideNav.classList.add('side-nav-open');
      content.classList.remove('content-expand');
      content.classList.add('content');
      topNav.classList.add('top-nav-open');
      topNav.classList.remove('top-nav-close');
    }
  };

  const isSidebarAccordionActive = () => {
    let urlList = [];
    sidebarItems.map((item) => {
      urlList.push(
        item.subMenu.map((subItem) => {
          return subItem?.url;
        })
      );
    });
    return urlList.findIndex((items) =>
      items.includes(window.location.pathname)
    );
  };

  const sidebarItems = [
    {
      title: 'Dashboard',
      icon: <RiDashboardLine className="side-bar-item-icon" />,
      url: '/',
      subMenu: [],
    },
    {
      title: 'Customer',
      icon: <BsPeople className="side-bar-item-icon" />,
      url: '/Customer',
      subMenu: [
        {
          title: 'New Customer',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/CustomerCreateUpdatePage',
        },
        {
          title: 'Customer List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/CustomerListPage',
        },
      ],
    },
    {
      title: 'Supplier',
      icon: <TbTruckDelivery className="side-bar-item-icon" />,
      url: '/Supplier',
      subMenu: [
        {
          title: 'New Supplier',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/SupplierCreateUpdatePage',
        },
        {
          title: 'Supplier List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/SupplierListPage',
        },
      ],
    },
    {
      title: 'Expense',
      icon: <AiOutlineBank className="side-bar-item-icon" />,
      url: '/Expense',
      subMenu: [
        {
          title: 'New Expense Type',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ExpenseTypeCreateUpdatePage',
        },
        {
          title: 'Expense Type List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ExpenseTypeListPage',
        },
        {
          title: 'New Expense',
          icon: <IoCreateOutline size={16} className="side-bar-subitem-icon" />,
          url: '/ExpenseCreateUpdatePage',
        },
        {
          title: 'Expense List',
          icon: <AiOutlineUnorderedList size={16} className="side-bar-subitem-icon" />,
          url: '/ExpenseListPage',
        },
      ],
    },
    {
      title: 'Product',
      icon: <BsBox className="side-bar-item-icon" />,
      url: '/Product',
      subMenu: [
        {
          title: 'New Brand',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/BrandCreateUpdatePage',
        },
        {
          title: 'Brand List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/BrandListPage',
        },
        {
          title: 'New Category',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/CategoryCreateUpdatePage',
        },
        {
          title: 'Category List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/CategoryListPage',
        },
        {
          title: 'New Product',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ProductCreateUpdatePage',
        },
        {
          title: 'Product List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ProductListPage',
        },
      ],
    },
    {
      title: 'Purchase',
      icon: <BsBagPlus className="side-bar-item-icon" />,
      url: '/Purchase',
      subMenu: [
        {
          title: 'New Purchase',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/PurchaseCreateUpdatePage',
        },
        {
          title: 'Purchase List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/PurchaseListPage',
        },
      ],
    },
    {
      title: 'Sale',
      icon: <BsCartPlus className="side-bar-item-icon" />,
      url: '/Sale',
      subMenu: [
        {
          title: 'New Sale',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/SalesCreateUpdatePage',
        },
        {
          title: 'Sale List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/SalesListPage',
        },
      ],
    },
    {
      title: 'Return',
      icon: <BsBagX className="side-bar-item-icon" />,
      url: '/Return',
      subMenu: [
        {
          title: 'New Return',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ReturnCreateUpdatePage',
        },
        {
          title: 'Return List',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ReturnListPage',
        },
      ],
    },
    {
      title: 'Report',
      icon: <BsGraphUp className="side-bar-item-icon" />,
      url: '/Report',
      subMenu: [
        {
          title: 'Sale Report',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/SaleReportPage',
        },
        {
          title: 'Return Report',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ReturnReportPage',
        },
        {
          title: 'Purchase Report',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/PurchaseReportPage',
        },
        {
          title: 'Expense Report',
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: '/ExpenseReportPage',
        },
      ],
    },
  ];

  const onLogout = () => {
    // removeSessions();
  };

  return (
    <Fragment>
      <nav className="fixed w-full top-0 left-0 z-20 px-0 shadow-sm flex justify-between items-center lg:px-3 bg-[#00A884] h-20">
        <div  className='flex justify-between items-center px-3 w-full'>
          <div>
            <div ref={(div) => { topNavRef = div }} className="top-nav-open">
              <h4 className="text-white m-0 p-0">
                <button onClick={MenuBarClickHandler}><AiOutlineMenu className='text-xl' /></button>
              </h4>
            </div>
          </div>
          <div className=" h-auto flex items-center">
            <div className="user-dropdown">
              <img className="icon-nav-img icon-nav" src="https://i.ibb.co/r2LCwp1/chaudhuree.jpg" alt="" />
              <div className="user-dropdown-content">
                <div className="mt-4 text-center flex flex-col justify-center items-center gap-4">
                  <img className="icon-nav-img" src="https://i.ibb.co/r2LCwp1/chaudhuree.jpg" alt="" />
                  <h6>sOhan</h6>
                  <hr className="user-dropdown-divider p-0" />
                </div>
                <NavLink to="/Profile" className="side-bar-item dropdown-item-custom">
                  <AiOutlineUser className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Profile</span>
                </NavLink>
                <a onClick={onLogout} className="side-bar-item dropdown-item-custom">
                  <AiOutlineLogout className="side-bar-item-icon" />
                  <span className="side-bar-item-caption">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div ref={(div) => { sideNavRef = div }} className="side-nav-open border-radius-0 card pt-0">
        <NavLink to="/" end className="flex justify-center sticky-top bg-white">
          <img src={logo} className="logo" />
        </NavLink>
        <CustomAccordion items={sidebarItems} defaultActiveKey={isSidebarAccordionActive()} />
      </div>
      <div ref={(div) => (contentRef = div)} className="content">
        {props.children}
      </div>
    </Fragment>
  );
};

export default MasterLayout;
