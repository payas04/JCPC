import React from "react";

const ProfileCard = ({ name, role, imageUrl }) => {
  return (
    <li key={name}>
      <div className="flex flex-col items-center gap-x-6">
        <img alt="" src={imageUrl} className="h-16 w-16 rounded-full" />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {name}
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            {role}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ProfileCard;
