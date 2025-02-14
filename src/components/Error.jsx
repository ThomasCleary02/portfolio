import React from "react";
import RouteButton from "./RouteButton";
import { motion } from "framer-motion";

const Error = ({ message }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex flex-col items-center justify-center p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold">Oops! Something went wrong.</h2>
      <p className="mt-2">{message || "An unexpected error occurred. Please try again later."}</p>
      <RouteButton text="Go Home" route="/" className="mt-4" />
    </motion.div>
  );
};

export default Error;