import Image from "next/image";
import React from "react";
import WaliteSidenav from "./WaliteSidenav";
import NavLinks from "./NavLinks";

function Sidebar(props) {
  return (
    <div
      style={{ fontFamily: "SfproText ,Poppins-Bold", width: "400" }}
      className=" lg:block hidden dark:bg-[#040506] drop-shadow-xl shadow-lg shadow-gray-800/50   flex-row z-40   bg-[#0d151d] fixed h-full max-w-[340px] w-[200px] lg:w-[300px]  text-white"
    >
      <div className=" pt-28  ">
        <div className="justify-center mx-auto flex">
          <Image
            className="hover:opacity-50   duration-700"
            src={"/ico/1.png"}
            alt="divzoon"
            height="26"
            width="110"
            priority
            quality={100}
          />
        </div>
        <NavLinks
          Home={props.Home}
          Projects={props.Projects}
          Messages={props.Messages}
          Settings={props.Settings}
          help={props.help}
        />
      </div>
      <div className="absolute bottom-5 w-full ">
        <WaliteSidenav
          companyimage="/ico/user.png"
          companyName="Clinet Name"
          CurrentBalance="400"
          NextPayment="2000"
        />
      </div>
    </div>
  );
}

export default Sidebar;
