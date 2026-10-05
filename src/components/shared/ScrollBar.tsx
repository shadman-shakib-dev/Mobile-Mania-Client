"use client";
import { useEffect, useState } from "react";

const ScrollBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateScrollProgress = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (pos === 0) {
      setIsVisible(false);
      setScrollProgress(0);
    } else {
      setIsVisible(true);
      const scrollValue = Math.round((pos * 100) / calcHeight);
      setScrollProgress(scrollValue);
    }
  };

  useEffect(() => {
    const handleScroll = () => updateScrollProgress();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    // Initial call
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        height: "60px",
        width: "60px",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1000,
        background: `conic-gradient(#22A1F0 ${scrollProgress}%, #e5e7eb ${scrollProgress}%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        transition: "all 0.3s ease",
        transform: isVisible ? "scale(1)" : "scale(0)",
      }}
      onClick={scrollToTop}
      onMouseEnter={(e) => {
        // e.target.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        // e.target.style.transform = "scale(1)";
      }}
    >
      {/* Inner circle */}
      <div
        style={{
          height: "45px",
          width: "45px",
          backgroundColor: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22A1F0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollBar;
