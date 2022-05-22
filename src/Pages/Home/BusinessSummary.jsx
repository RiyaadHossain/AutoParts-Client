import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const BusinessSummary = () => {
  return (
    <div className="pt-32 mx-auto container">
      <h1 className="text-5xl text-center text-secondary font-bold mb-12">
        Our Successful Deals
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Summary - 1 */}
        <div className="text-center">
          <BsPeopleFill className="text-7xl text-accent mx-auto" />
          <div>
            <h1 className="text-5xl font-bold mt-8 mb-2">100 +</h1>
            <p className="text-3xl font-semibold text-accent">Customers</p>
          </div>
        </div>
        {/* Summary - 2 */}
        <div className="text-center">
          <GiReceiveMoney className="text-7xl text-accent mx-auto" />
          <div>
            <h1 className="text-5xl font-bold mt-8 mb-2">100 +</h1>
            <p className="text-3xl font-semibold text-accent">Annual revenue</p>
          </div>
        </div>
        {/* Summary - 3 */}
        <div className="text-center">
          <MdReviews className="text-7xl text-accent mx-auto" />
          <div>
            <h1 className="text-5xl font-bold mt-8 mb-2">100 +</h1>
            <p className="text-3xl font-semibold text-accent">Reviews</p>
          </div>
        </div>
        {/* Summary - 4 */}
        <div className="text-center">
          <FaTools className="text-7xl text-accent mx-auto" />
          <div>
            <h1 className="text-5xl font-bold mt-8 mb-2">100 +</h1>
            <p className="text-3xl font-semibold text-accent">Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
