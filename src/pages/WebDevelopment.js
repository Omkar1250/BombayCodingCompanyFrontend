import React from "react";
import { motion } from "framer-motion";
import webDashboard from "../assets/images/webdashboard.jpg";
import responsiveDesign from "../assets/images/responsive-Design.jpg";
import seoOptimization from "../assets/images/innovation.jpg";

export default function WebDevelopment() {
    return (
        <div className="bg-bgblue text-white min-h-screen p-6 md:p-12">
            <motion.h1 
                className="text-5xl font-semibold text-center mb-12" 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Web Development Solutions
            </motion.h1>

            <div className="grid md:grid-cols-3 gap-10 ">
                <ServiceCard 
                    imgSrc={webDashboard} 
                    title="Custom Web Apps" 
                    description="We craft tailored, high-performance web applications with modern frameworks." 
                />
                <ServiceCard 
                    imgSrc={responsiveDesign} 
                    title="Mobile-Friendly Design" 
                    description="Our websites offer a seamless experience across all devices and screen sizes." 
                />
                <ServiceCard 
                    imgSrc={seoOptimization} 
                    title="SEO & Performance" 
                    description="Enhance visibility and speed with optimized web solutions that rank higher." 
                />
            </div>

            <motion.div 
                className="flex flex-col items-center mt-16 space-y-6" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-lg text-gray-300 max-w-xl text-center">
                    Elevate your business with our cutting-edge web development services. Let's build something remarkable together.
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all">
                    Get Started Today
                </button>
            </motion.div>
        </div>
    );
}

function ServiceCard({ imgSrc, title, description }) {
    return (
        <motion.div 
            className="bg-offwhite p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-gray-50 rounded-xl overflow-hidden">
                <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
                <div className="p-6">
                    <h3 className="text-3xl font-bold mb-3 text-richblack-300">{title}</h3>
                    <p className="text-gray-400 text-lg">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}
