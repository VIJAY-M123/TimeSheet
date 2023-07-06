import React from "react"
import {
  FaTh, FaUserAlt, FaRegChartBar,
  FaCommentAlt, FaShoppingBag, FaThList
} from "react-icons/fa"
import { FiChevronUp, FiChevronDown } from "react-icons/fi"
import { MdEmail } from "react-icons/md"
import { MdOutlineWifiCalling3 } from "react-icons/md"
import { TiSocialLastFmCircular } from "react-icons/ti"
import { FaSms } from "react-icons/fa"
import { AiOutlineApartment } from "react-icons/ai"
import { HiUserGroup, HiCurrencyRupee } from "react-icons/hi";
import { GiNotebook } from "react-icons/gi";
import { SiHelpdesk } from "react-icons/si";
import { BsCalendarMinus } from "react-icons/bs"
import {ImProfile} from "react-icons/im"


export const menuItem = [
  {
    path: "/dashs",
    name: "My Team",

    icon: <HiUserGroup />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,

    subNav: [
      {
        title: 'Organization Charts',
        path: '/overview/users',
        icon: <FaUserAlt />
      },

    ]
  },
  {
    path: "/marketing",
    name: "My Details",
    icon: <GiNotebook />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,

    subNav: [
      {
        title: 'My Details',
        path: '/email',
        icon: <MdEmail />
      },
      {
        title: 'My Skill Set',
        path: '/call',
        icon: <MdOutlineWifiCalling3 />
      },

    ]
  },
  {
    path: "/productList",
    name: "Time Sheet",
    icon: <BsCalendarMinus />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: 'Dashboard',
        path: '/dash',
        icon: <MdEmail />
      },
      {
        title: 'Time Sheet',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },
      {
        title: 'Night Shift',
        path: '/night',
        icon: <MdOutlineWifiCalling3 />
      },
      {
        title: 'Notification',
        path: '/notify',
        icon: <MdOutlineWifiCalling3 />
      },



    ]
  },
  {
    path: "/product",
    name: "LMS",
    icon: <FaShoppingBag />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: 'Dashboard',
        path: '/help',
        icon: <MdEmail />
      },
      {
        title: 'My Profile',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },
      {
        title: 'Leave Request',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },
      {
        title: 'Compensation Request',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },
      {
        title: 'Leave Policy',
        path: '/help',
        icon: <MdEmail />
      },

      {
        title: 'Redeem Request',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },
      {
        title: 'Holiday Calender',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },

    ]
  },
  {
    path: "/comment",
    name: "Pay Roll",
    icon: <HiCurrencyRupee />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: 'Dashboard',
        path: '/help',
        icon: <MdEmail />
      },
      {
        title: 'Pay Slips',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },
      {
        title: 'Form 16',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },
      {
        title: 'Hr Policy',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },

    ]

  },
  {
    path: "/analytics",
    name: "Help Desk",
    icon: <SiHelpdesk />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: 'Help Desk',
        path: '/help',
        icon: <MdEmail />
      },
      {
        title: 'Tickets',
        path: '/my',
        icon: <MdOutlineWifiCalling3 />
      },

    ]
  },
  {
    path: "/chat",
    name: "Team Chat",
    icon: <ImProfile/>,
    
  },
  {
    path: "/home",
    name: "Employee Self Service",
    icon: <ImProfile/>,
    
  },
]