import React from "react";
import CarHeadLight from "../../Assets/Images/CarHeadLight.jpg";

const WhyChooseUs = () => {
  return (
    <div className="pt-32 mx-auto container">
      <h1 className="text-5xl text-center text-secondary font-bold mb-12">
        Why Choose Us
      </h1>
      <div className="md:flex gap-8 items-center justify-center">
        <div className="w-1/2">
          <div
            tabindex="0"
            class="collapse collapse-arrow mb-3 border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-3xl font-medium">
              We are the Best Team
            </div>
            <div class="collapse-content">
              <p className="text-lg">
                Porttitor ligula viverra sem tristique ullamcorper. eu vitae risus. Suspendisiqua. volutpat augue, eu porta nibh sagittis non ondimentum a metus id, scelerisque leo. Aenean varius, nulla eget maximus porttitor, augue orci volutpa odio.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow mb-3 border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-3xl font-medium">
              Always Forward
            </div>
            <div class="collapse-content">
              <p className="text-lg">
                Porttitor ligula viverra sem tristique ullamcorper. eu vitae risus. Suspendisiqua. volutpat augue, eu porta nibh sagittis non ondimentum a metus id, scelerisque leo. Aenean varius, nulla eget maximus porttitor, augue orci volutpa odio.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow mb-3 border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-3xl font-medium">
              We Provide the coolest Parts
            </div>
            <div class="collapse-content">
              <p className="text-lg">
                Porttitor ligula viverra sem tristique ullamcorper. eu vitae risus. Suspendisiqua. volutpat augue, eu porta nibh sagittis non ondimentum a metus id, scelerisque leo. Aenean varius, nulla eget maximus porttitor, augue orci volutpa odio.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow mb-3 border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-3xl font-medium">
              The Best Company
            </div>
            <div class="collapse-content">
              <p className="text-lg">
                Porttitor ligula viverra sem tristique ullamcorper. eu vitae risus. Suspendisiqua. volutpat augue, eu porta nibh sagittis non ondimentum a metus id, scelerisque leo. Aenean varius, nulla eget maximus porttitor, augue orci volutpa odio.
              </p>
            </div>
          </div>
        </div>
        <img className="w-1/2 rounded-md" src={CarHeadLight} alt="" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
