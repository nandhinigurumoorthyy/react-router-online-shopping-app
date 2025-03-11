import React, { useEffect, useState } from "react";
import bg2 from "../Images/bg2.jpg";
import tri1 from "../Images/tri_1.png"
import tri2 from "../Images/tri_2.png"
import bg from "../Images/bg.jpg"

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen  items-center justify-center font-mono text-4xl font-semibold">
        Loading....
      </div>
    );
  }

  return (
    <>
      <div className="pb-28 px-6 sm:px-10 md:px-16 lg:px-20 flex items-center justify-center flex-col pt-16 md:pt-28 lg:pt-24 space-y-12">
        
        {/* Header Image + Text */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 pb-2 lg:pb-5 md:pb-5">
          <img src={bg} alt="bg" className="w-72 sm:w-96 md:w-[400px] lg:w-[500px]" />
          <p className="text-xl sm:text-2xl md:text-3xl text-center  text-cyan-800 font-semibold">
            🛒 Shopping that vibes with you — fresh styles, every day!!!
          </p>
        </div>
  
        {/* Main Heading */}
        <div className="flex pt-3 justify-center items-center w-full">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-700 text-center leading-snug">
            Grab the trend + 10% OFF — Shop now before it’s gone!
          </p>
        </div>
  
        {/* Offer Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full">
          
          {/* Offer Card */}
          <div
            className="flex flex-col gap-6 border-2 rounded-3xl px-10 sm:px-16 py-10 sm:py-12 bg-cyan-800 shadow-xl"
            style={{ boxShadow: '0 30px 60px rgba(0, 0, 0.5, 0.5)' }}
          >
            <h1 className="text-3xl sm:text-4xl text-white font-semibold font-sans text-center">
              Special Offer
            </h1>
            <div className="w-full bg-white py-2 rounded-md">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-cyan-800 font-bold font-sans text-center">
                MEGA SALE !!!
              </h1>
            </div>
            <p className="text-center">
              <span className="text-white text-2xl sm:text-3xl">up to </span>
              <span className="text-red-800 text-4xl sm:text-5xl bg-white px-2 font-bold rounded-md">10%</span>
              <span className="text-white text-2xl sm:text-3xl"> discount</span>
            </p>
          </div>
  
          {/* Offer Image */}
          <img src={bg2} className="h-72 sm:h-80 md:h-96 lg:h-[420px] object-contain" />
        </div>
  
        {/* Final Section with Triangle Images and Text */}
        <div className="pt-14 pb-24 relative w-full">
          <img src={tri1} className="mx-auto w-16 lg:w-20 md:w-16"/>
          <div className="flex flex-col justify-center pt-10 rounded-md w-full poppins-semibold">
            <p className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center text-zinc-700 leading-snug px-4">
              We're here to make your shopping awesome.
            </p>
          </div>
          <img src={tri2} className="absolute left-0 bottom-0 w-16 lg:w-20 md:w-16" />
          <img src={tri1} className="absolute right-0 bottom-0 w-16  lg:w-20  md:w-16" />
        </div>
      </div>
    </>
  );
  
};

export default Home;
