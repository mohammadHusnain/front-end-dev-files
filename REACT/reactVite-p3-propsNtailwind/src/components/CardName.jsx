import React from "react";

function CardName(props) {
  return (
    <div className="bg-white backdrop-blur-lg bg-opacity-20 shadow-2xl rounded-2xl p-8 max-w-md w-full transform transition-all hover:scale-105 hover:shadow-3xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        User Profile
      </h2>
      <div className="space-y-4">
        <p className="text-white text-lg">
          <span className="font-semibold">👤 Name:</span> {props.name}
        </p>
        <p className="text-white text-lg">
          <span className="font-semibold">🎂 Age:</span> {props.age}
        </p>
        <p className="text-white text-lg">
          <span className="font-semibold">📧 Email:</span> {props.email}
        </p>
      </div>
    </div>
  );
}

export default CardName;
