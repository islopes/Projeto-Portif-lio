import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <div className=" bg-zinc-900 text-white relative min-h-screen overflow-x-hidden selection:bg-yellow-400 selection:text-zinc-950 font-ubuntu">
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rouded-full border border-yellow-400/80 pointer-events-none z-50 flex items-center justify-center"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
      >
        <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_8px_2px] ]"></div>
      </motion.div>
      <Navbar />
    </div>
  );
};

export default App;
