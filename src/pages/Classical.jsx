import React from "react";
import HipHopImg from "./HipHopImg.jpg";

export default function HipHop() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-pink-600 text-center"  >Classical Classes</h1>
      <img
      //  src={HipHopImg} // replace with your image URL or import
       // alt="Hip Hop"
        //className="w-half max-w-3xl mx-auto rounded shadow mb-4"
      />
      
      <div className="text-lg text-gray-700 space-y-4 className text=center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-600 text-center">Kids-beginners</h3>
          <p>Weekdays: Mon–Fri, 4–5 PM</p>
          <p>Weekends: Sat–Sun, 10–11 AM</p>
          <p>Fee: ₹2000/month</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-600 text-center">Kids-advanced</h3>
          <p>Weekdays: Mon–Fri, 4–5 PM</p>
          <p>Weekends: Sat–Sun, 10–11 AM</p>
          <p>Fee: ₹2800/month</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-600 text-center">Adults-beginners</h3>
          <p>Weekdays: Mon–Fri, 4–5 PM</p>
          <p>Weekends: Sat–Sun, 10–11 AM</p>
          <p>Fee: ₹2500/month</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-600 text-center">Adults-advanced</h3>
          <p>Weekdays: Mon–Fri, 6–7 PM</p>
          <p>Weekends: Sat–Sun, 5–6 PM</p>
          <p>Fee: ₹3500/month</p>
        </div>
      </div>
    </div>
  );
}
