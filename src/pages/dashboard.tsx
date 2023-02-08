import Image from "next/image";
import React from "react";

const Dashboard = () => {

  return (
    <>
    <section className="h-full bg-hero bg-no-repeat bg-cover bg-opacity-50 bg-center w-full bg-[url('../../public/dashboard_first.png')]">
        <div className="mt-[350px] mb-[250px] flex justify-center">
<button
          className="bg-[#1c2122] uppercase px-9 py-3 tracking-[2px] text-[14px] text-white border-2 border-white mt-3 border-solid "
        >
          go for rent
        </button>
        </div>
    </section>
      <section className="flex-col w-full bg-gradient-to-b from-[#1c2122] to-[#748284] px-[200px]">
        <div className="flex"> 
<div className="flex-[0_0_76%] flex-col my-48 content-end">
      <Image src="/1234.png" width={620} height={403} alt="" />
      </div >
      <div className="flex-[0_0_24%] mt-24 text-white text-end">
            <p className="text-[38px] text-white tracking-widest">Car Rental</p>
            <p className="text-[17px] text-white mt-5">Find the best car rental price. Compare prices worldwide and save up to 60% on over 1053 car rental companies.</p>
        </div>
        </div>
        <div className="flex flex-col justify-self-center justify-center text-center items-center text-white">
          <p className="text-[38px] text-white tracking-widest">How it works</p>
          <p className="text-[17px] text-white">Enter the place and time of collection, select a car. Choose your preferred payment method. Pick up the car and use it, <br></br>or our taxi driver will pick you up at the specified place and time.</p>
        </div>
        <div className="flex justify-between px-[150px] py-16">
          <div className="flex-col">
            <Image src="/car.png" width={90} height={90} alt="" />
            <p className="text-[10px] text-center text-white uppercase tracking-widest pt-2">250+ CARS</p>
          </div>
          <div className="flex-col">
            <Image src="/location.png" width={90} height={90} alt="" />
            <p className="text-[10px] text-center text-white uppercase tracking-widest pt-2">LOCATION</p>
          </div>
          <div className="flex-col">
           <Image src="/card.png" width={90} height={90} alt="" />
            <p className="text-[10px] text-center text-white uppercase tracking-widest pt-2">easy payment</p>
          </div>
          <div className="flex-col">
             <Image src="/group.png" width={90} height={90} alt="" />
            <p className="text-[10px] text-center text-white uppercase tracking-widest pt-2">HAPPY USERS</p>
          </div>
        </div>
    </section>
    <section className="flex w-full bg-[#1c2122]">
      <div className="flex-[0_0_50%] my-32 text-center">
<div className="flex flex-col justify-self-center justify-center text-center items-center text-white">
          <p className="text-[38px] text-white tracking-widest m-3">How it works</p>
            <p className="text-[17px] text-white mt-3">Enter the place and time of collection, select a car.<br></br> Choose your preferred payment method. Pick up the car and use it</p>
            <button
          className="bg-none uppercase p-3 tracking-[2px] text-[11px] text-white border-2 border-white mt-3 border-solid "
        >
          more information
        </button>
        </div>
      </div >
      <div className="py-[250px] flex-[0_0_50%] h-full bg-hero bg-no-repeat bg-cover bg-center w-full bg-[url('../../public/pexelsphoto3874342.jpeg')]"/>
      </section>
<section className="flex w-full justify-center bg-gradient-to-b from-[#1c2122f5] to-[#748284]">
        <div className="flex justify-between my-24 space-x-24">
        <div className="flex-col text-center">
          <p className="text-[23px] text-white">Econom</p>
          <Image src="/car-png-39061.png" width={220} height={130} alt="" />
          <p className="text-[17px] text-white mt-2">Enter the place and time of collection.</p>
        </div>
        <div className="flex-col text-center">
          <p className="text-[23px] text-white">Medium</p>
          <Image src="/volkswagen.png" width={220} height={130} alt="" />
          <p className="text-[17px] text-white mt-2">Enter the place and time of collection.</p>
        </div>
        <div className="flex-col text-center">
          <p className="text-[23px] text-white">Premium</p>
          <Image src="/car-png-39065.png" width={220} height={130} alt="" />
          <p className="text-[17px] text-white mt-2">Enter the place and time of collection.</p>
        </div>
       </div>
    </section>

      <section className="flex w-full bg-[#1c2122]">
        
<div className="flex-[0_0_76%] flex-col">
      <Image src="/black_car.jpeg" width={620} height={303} alt="" />
        </div >
        <div className="flex-[0_0_24%] text-white">
            <p className="text-[38px] text-white tracking-widest">Car Rental</p>
        </div>
        
      </section>
      
    </>
  );
};

export default Dashboard;
