import React from "react";

const locations = [
  { name: "Thresholds", address: "4101 N Ravenswood Ave, Chicago, IL 60613" },
  { name: "Thresholds", address: "4423 N Ravenswood Ave, Chicago, IL 60640" },
  { name: "Thresholds Mothers’ Project", address: "1100 W Belmont Ave, Chicago, IL 60657" },
  { name: "Threshold South", address: "734 W 47th St, Chicago, IL 60609" },
  { name: "Thresholds Affiliate", address: "718 W 47th St, Chicago, IL 60609" },
  { name: "Thresholds New Freedom Center", address: "1110 W Belmont Ave, Chicago, IL 60657" },
  { name: "Thresholds Health", address: "5801 W Corcoran Pl, Chicago, IL 60644" },
  { name: "The Living Room at Thresholds", address: "4423 N Ravenswood Ave, Chicago, IL 60640" },
  { name: "Thresholds Bridge Southwest", address: "3638 S Kedzie Ave, Chicago, IL 60632" },
  { name: "Thresholds Ogden Location", address: "S Ogden Ave W, Chicago, IL 60612" },
  { name: "Thresholds", address: "4223 N Lincoln Ave, Chicago, IL 60618" },
  { name: "Thresholds", address: "7547 N Ridge Blvd, Chicago, IL 60645" },
  { name: "Thresholds Carroll Street", address: "3520 W Carroll Ave, Chicago, IL 60624" },
  { name: "Thresholds", address: "1410 E 62nd St, Chicago, IL 60637" },
  { name: "Thresholds Bill's Place Jasmine House", address: "4358 S Keating Ave, Chicago, IL 60632" },
  { name: "Thresholds", address: "3017 W Harrison St, Chicago, IL 60612" },
  { name: "Threshold Acoustics", address: "141 W Jackson Blvd #2080, Chicago, IL 60604" },
  { name: "Thresholds Home Health Hope", address: "Blue Island, IL 60406" },
  { name: "Threshold Learning Consultancy (TLC)", address: "444 N Michigan Ave #1200, Chicago, IL 60611" },
  { name: "Thresholds", address: "2030 N Seminary Ave, Woodstock, IL 60098" },
  { name: "Thresholds Outreach", address: "202 N Schuyler Ave, Kankakee, IL 60901" },
  { name: "Threshold's Mary Hill-House", address: "7356 N Winchester Ave, Chicago, IL 60626" },
  { name: "Thresholds", address: "444 Frontage Rd, Northfield, IL 60093" },
  { name: "Thresholds", address: "619 W 15th St, Chicago Heights, IL 60411" },
  { name: "Thresholds Lake County Ent", address: "300 Grand Ave Ste B, Waukegan, IL 60085" }
];

const Locations = () => {
  return (
    <div>
      <h1>Thresholds Locations</h1>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <strong>{location.name}</strong>: {location.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
