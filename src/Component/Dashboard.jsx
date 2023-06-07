import React from "react";
import Style from "./Style/Dashboard.module.css";
import DashboardIcon from "../Assets/Images/dashboard_icon.png";
import Transaction from "../Assets/Images/transaction_icon.png";
import Schedule from "../Assets/Images/schedule_icon.png";
import UserIcon from "../Assets/Images/user_icon.png";
import Setting from "../Assets/Images/setting_icon.png";
import { FaRegBell } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import TotalRevenu from "../Assets/Images/total_revenue.png";
import TotalLikes from "../Assets/Images/total_likes.png";
import TotalUsers from "../Assets/Images/total_users.png";
import TotalTransactions from "../Assets/Images/total_transactions_icon.png";
import { LineChart } from "./LineChart";
import { LineChart1 } from "./LineChart1";
import { PieChart } from "./PieChart";

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

const totalData = [
  {
    image: TotalRevenu,
    title: "Total Revenues",
    totalNo: "$ 2,129,430",
    bg: "#DDEFE0",
  },
  {
    image: TotalTransactions,
    title: "Total Transactions",
    totalNo: "1,500",
    bg: "#F4ECDD",
  },
  {
    image: TotalLikes,
    title: "Total Likes",
    totalNo: "9721",
    bg: "#EFDADA",
  },
  {
    image: TotalUsers,
    title: "Total Users",
    totalNo: "2,129,430",
    bg: "#DEE0EF",
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
                <BiSearch style={{ color: "rgb(100,100,100)" }} />
              </button>
            </div>
            <FaRegBell />
            <img src="" alt="" />
          </div>
        </div>
        <div className={Style.totalContainer}>
          {totalData?.map((el, i) => (
            <div className={Style.card} style={{ backgroundColor: el.bg }}>
              <div>
                <p>{el.title}</p>
                <h2>{el.totalNo}</h2>
              </div>
              <img src={el.image} alt="" />
            </div>
          ))}
        </div>
        {/* <LineChart/> */}
        <LineChart1/>
        <div className={Style.productsCards}>
           <div>
           <PieChart/>
           </div>
           <div></div>
        </div>
        
      </div>
    </div>
  );
};
