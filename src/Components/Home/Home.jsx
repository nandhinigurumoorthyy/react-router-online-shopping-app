import React, { useEffect, useState } from "react";
import poster1 from "../Images/poster1.jpg";
import poster2 from "../Images/poster2.jpg";
import gif from "../Images/giff.gif";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center font-mono text-4xl font-semibold">
        Loading....
      </div>
    );
  }
  return (
    <>
      <div className="justify-center flex pt-36">
        <img src={poster1} className="justify-center h-96 items-center flex " />
      </div>

      <div className="  flex justify-center items-center gap-5">
        <img src={poster2} className="justify-center h-96 items-center flex " />
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl text-red-700 font-semibold font-sans">
            Special Offer
          </h1>
          <h1 className="text-5xl text-cyan-800 font-bold font-sans">
            MEGA SALE !!!
          </h1>
          <p>
            <span className="text-gray-700 text-3xl">upTo</span>
            <span className="text-red-800 text-5xl font-bold"> 10%</span>
            <span className="text-gray-700 text-3xl"> discount</span>
          </p>
        </div>
      </div>

      <div className="justify-center flex mb-10">
        <img
          src={gif}
          className="justify-center h-96 w-2/3 items-center flex "
        />
      </div>
    </>
  );
};

export default Home;
