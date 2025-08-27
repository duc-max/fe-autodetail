/* eslint-disable @next/next/no-img-element */
"use client";
import { Menu, MenuProps } from "antd";
import { BellPlus, ChevronDown, MailOpen, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";
import MyButton from "../ui/button";

const items: MenuProps["items"] = [
  {
    key: "home",
    label: (
      <div className="flex w-full items-center justify-between">
        <span>Home</span>
        <ChevronDown className="ml-2" size={"20px"} />
      </div>
    ),
    children: [
      {
        key: "/",
        label: "Home Page",
      },
      {
        key: "/home-option-2",
        label: "Home Option 2",
      },
    ],
  },
  {
    key: "services",
    label: (
      <div className="flex w-full items-center justify-between">
        <span>Services</span>
        <ChevronDown className="ml-2" size={"20px"} />
      </div>
    ),
    children: [
      {
        key: "/services/web-development",
        label: "Web Development",
      },
      {
        key: "/services/mobile-apps",
        label: "Mobile Apps",
      },
      {
        key: "/services/consulting",
        label: "Consulting",
      },
    ],
  },
  {
    key: "pages",
    label: (
      <div className="flex w-full items-center justify-between">
        <span>Pages</span>
        <ChevronDown className="ml-2" size={"20px"} />
      </div>
    ),
    children: [
      {
        key: "/about",
        label: "About Us",
      },
      {
        key: "/contact",
        label: "Contact",
      },
      {
        key: "/faq",
        label: "FAQ",
      },
    ],
  },
  {
    key: "/shop",
    label: "Shop",
  },
  {
    key: "gallery",
    label: (
      <div className="flex w-full items-center justify-between">
        <span>Gallery</span>
        <ChevronDown className="ml-2" size={"20px"} />
      </div>
    ),
    children: [
      {
        key: "/gallery/photos",
        label: "Photo Gallery",
      },
      {
        key: "/gallery/videos",
        label: "Video Gallery",
      },
    ],
  },
  {
    key: "/blog",
    label: "Blog",
  },
  {
    key: "workshop",
    label: (
      <div className="flex w-full items-center justify-between">
        <span>Workshop</span>
        <ChevronDown className="ml-2" size={"20px"} />
      </div>
    ),
    children: [
      {
        key: "/workshop/upcoming",
        label: "Upcoming Workshops",
      },
      {
        key: "/workshop/past-events",
        label: "Past Events",
      },
    ],
  },
];

function Header() {
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("Navigating to:", e.key);
    if (e.key.startsWith("/")) {
      router.push(e.key);
    }
  };
  return (
    <div className="absolute right-0 left-0 bg-none">
      <div className="w-full overflow-hidden bg-[rgba(18,18,18,0.25)]">
        <div className="container flex h-[42px] items-center justify-between">
          <div className="flex items-center justify-between text-white">
            <BellPlus size={20} />
            <span className="ml-[10px] text-[14px]">
              GetGet 50% Discount for AutoDetail New Member
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center justify-between text-white">
              <PhoneCall size={20} />
              <span className="ml-[10px] text-[14px]">
                Call us: +1 800 987 654
              </span>
            </div>
            <div className="ml-[50px] flex items-center justify-between text-white">
              <MailOpen size={20} />
              <span className="ml-[10px] text-[14px]">
                Message us: support@autodetail.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex h-[80px] items-center justify-between ">
        <img src="./logo-white.webp" alt="logo" />
        <div className="no-hover-underline ml-[150px] flex-1">
          <Menu
            onClick={onClick}
            mode="horizontal"
            items={items}
            className="!text-[16px][&_.ant-menu-item]:!text-white !border-b-0 !bg-inherit [&_.ant-menu-item-selected]:!text-white [&_.ant-menu-item:hover]:!text-white [&_.ant-menu-submenu]:!border-b-0 [&_.ant-menu-submenu-title]:!text-white [&_.ant-menu-submenu-title:hover]:!text-white"
          />
        </div>
        <div>
          <MyButton type="primary">Make Appointment</MyButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
