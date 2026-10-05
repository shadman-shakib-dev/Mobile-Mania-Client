/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";

const CountDownPage = () => {
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(59);
    }
    if (minutes < 0) {
      setHours((prevHours) => prevHours - 1);
      setMinutes(59);
    }
  }, [seconds, minutes]);

  return (
    <div className="py-6 px-4">
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          ⚡ Flash Sale Ends In
        </h3>
        <p className="text-gray-600 text-sm lg:text-base">
          Don't miss out on these amazing deals!
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-[#22A1F0] to-[#1E8BC3] rounded-2xl shadow-xl p-6 lg:p-8">
          <div className="flex items-center justify-center space-x-4 lg:space-x-6">
            {/* Hours */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 lg:p-4 min-w-[60px] lg:min-w-[80px]">
                <div className="text-2xl lg:text-4xl font-bold text-white font-mono">
                  {hours.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-white/90 text-xs lg:text-sm font-medium mt-2">
                Hours
              </div>
            </div>

            {/* Separator */}
            <div className="text-white text-2xl lg:text-4xl font-bold animate-pulse">
              :
            </div>

            {/* Minutes */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 lg:p-4 min-w-[60px] lg:min-w-[80px]">
                <div className="text-2xl lg:text-4xl font-bold text-white font-mono">
                  {minutes.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-white/90 text-xs lg:text-sm font-medium mt-2">
                Minutes
              </div>
            </div>

            {/* Separator */}
            <div className="text-white text-2xl lg:text-4xl font-bold animate-pulse">
              :
            </div>

            {/* Seconds */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 lg:p-4 min-w-[60px] lg:min-w-[80px]">
                <div className="text-2xl lg:text-4xl font-bold text-white font-mono animate-pulse">
                  {seconds.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-white/90 text-xs lg:text-sm font-medium mt-2">
                Seconds
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${((60 - seconds) / 60) * 100}%` 
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownPage;