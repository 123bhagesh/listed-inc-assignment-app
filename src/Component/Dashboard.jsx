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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHLePNW1E4lSvBZWv8BYq-0KKdlQf8Bgs8uPZQ4mK&s" alt="profile-icon" />
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
        <LineChart1 />
        <div className={Style.productsCards}>
          <div>
            <h3>Top products</h3>
            <PieChart/>
          </div>
          <div>
            <h3>Today’s schedule</h3>
            <div>
                <div style={{height:"50px", border:"3px solid #9BDD7C"}}></div>
                <div>
                    <h5>Meeting with suppliers from Kuta Bali</h5>
                    <p>14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali </p>
                </div>
            </div>
            <div>
            <div style={{height:"50px", border:"3px solid #6972C3"}}></div>
                <div>
                    <h5>Check operation at Giga Factory 1</h5>
                    <p>18.00-20.00</p>
                    <p>at Central Jakarta </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
