import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './customaccordion.css';

function CustomAccordionItem({ title, icon, children, isActive, onClick }) {
  return (
    <div className="custom-accordion-item">
      <div className="custom-accordion-header" onClick={onClick}>
        <div className="side-bar-item">
          {icon}
          <span className="side-bar-item-caption ">{title}</span>
        </div>
        {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isActive && <div className="custom-accordion-body">{children}</div>}
    </div>
  );
}

export default function CustomAccordion({ items, defaultActiveKey }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveKey);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="custom-accordion">
      {items.map((item, index) => (
        item.subMenu.length ? (
          <CustomAccordionItem
            key={index}
            title={item.title}
            icon={item.icon}
            isActive={activeIndex === index}
            onClick={() => handleToggle(index)}
           
          >
            {item.subMenu.map((subItem, subIndex) => (
              <NavLink
                key={subIndex}
                className={(navData) =>
                  navData.isActive
                    ? 'side-bar-subitem-active side-bar-subitem'
                    : 'side-bar-subitem'
                }
                to={subItem.url}
                end
              >
                {subItem.icon}
                <span className="side-bar-subitem-caption">{subItem.title}</span>
              </NavLink>
            ))}
          </CustomAccordionItem>
        ) : (
          <NavLink
            key={index}
            className={(navData) =>
              navData.isActive
                ? 'side-bar-item-active side-bar-item mt-2'
                : 'side-bar-item mt-2 side-bar-item-parent'
            }
            to={item.url}
            end
          >
            {item.icon}
            <span className="side-bar-item-caption">{item.title}</span>
          </NavLink>
        )
      ))}
    </div>
  );
}
