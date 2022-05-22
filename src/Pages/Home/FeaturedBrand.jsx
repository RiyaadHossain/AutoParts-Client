import React from "react";
import BMW from "../../Assets/Logos/BMW.png"
import Chevrolet from "../../Assets/Logos/Chevrolet.png"
import Ferrari from "../../Assets/Logos/Ferrari.png"
import Lamborghini from "../../Assets/Logos/Lamborghini.png"
import Peugeot from "../../Assets/Logos/Peugeot.png"
import Tesla from "../../Assets/Logos/Tesla.png"
import "./Landing.css"

const FeaturedBrand = () => {
  return (
    <div className="pt-32 mx-auto container">
      <h1 className="text-5xl text-center text-secondary font-bold mb-12">
        Featured Brand
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div><img className="h-40 w-40 object-cover logo-hover" src={BMW} alt="" /></div>
          <div><img className="h-40 w-40 object-cover logo-hover" src={Chevrolet} alt="" /></div>
          <div><img className="h-40 w-40 object-cover logo-hover" src={Ferrari} alt="" /></div>
          <div><img className="h-40 w-40 object-cover logo-hover" src={Lamborghini} alt="" /></div>
          <div><img className="h-40 w-40 object-cover logo-hover" src={Peugeot} alt="" /></div>
          <div><img className="h-40 w-40 object-cover logo-hover" src={Tesla} alt="" /></div>
      </div>
    </div>
  );
};

export default FeaturedBrand;
