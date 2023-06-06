import React from "react";
import Style from "./Style/Dashboard.module.css";
import DashboardIcon from "../Assets/Images/dashboard_icon.png";
import Transaction from "../Assets/Images/transaction_icon.png";
import Schedule from "../Assets/Images/schedule_icon.png";
import UserIcon from "../Assets/Images/user_icon.png";
import Setting from "../Assets/Images/setting_icon.png";
import { FaRegBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const sidebarData = [
  {
    image: DashboardIcon,
    tab: "Dashboard",
  },
  {
    image: Transaction,
    tab: "Transaction",
  },
  {
    image: Schedule,
    tab: "Schedules",
  },
  {
    image: UserIcon,
    tab: "Users",
  },
  {
    image: Setting,
    tab: "Setting",
  },
];
export const Dashboard = () => {
  return (
    <div className={Style.dashboardContainer}>
      <div className={Style.fristChild}>
        <h1>Board.</h1>

        {sidebarData?.map((el, i) => (
          <div className={Style.tabs} key={i}>
            <img
              style={{ width: "14px", height: "14px" }}
              src={el.image}
              alt={el.tab}
            />
            <p>{el.tab}</p>
          </div>
        ))}
      </div>
      <div className={Style.secondChild}>
        <div>
          <h2>Dashboard</h2>
          <div>
            <div className={Style.searchDiv}>
              <input type="text" placeholder="Search..." />
              <button>
                <BiSearch style={{color:"rgb(100,100,100)"}} />
              </button>
            </div>
            < FaRegBell  />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
