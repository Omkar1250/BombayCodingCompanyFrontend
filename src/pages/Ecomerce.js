import { Link } from "react-router-dom";

export default function EcommerceSolutions() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-richblack-700 font-bold text-3xl p-3">E-commerce Solutions</h2>
  
          {/* Get Started Button below the heading */}
          <div className="px-3 py-2">
             <Link to={'/contactus'}>
                        <button className="px-4 py-3 bg-bgblue rounded-md text-white">
                          Get Started
                        </button>
                        
                        </Link>
          </div>
        </div>
  
        {/* Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Expertise</h3>
          <p className="text-gray-600 mb-8">
            We specialize in building robust, scalable, and user-friendly e-commerce solutions. From seamless checkout experiences to secure payment systems, we provide everything needed to run a successful online store.
          </p>
  
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Custom Store Design</h4>
              <p className="text-gray-700">
                We create personalized and responsive store designs that resonate with your brand and attract customers.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Payment Gateway Integration</h4>
              <p className="text-gray-700">
                Our solutions include easy integration with multiple payment gateways to provide seamless transactions.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">SEO Optimization</h4>
              <p className="text-gray-700">
                We optimize your e-commerce store to increase visibility and drive more traffic with effective SEO strategies.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Mobile-Friendly Solutions</h4>
              <p className="text-gray-700">
                Our e-commerce stores are designed to provide a seamless shopping experience across all devices.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Inventory Management</h4>
              <p className="text-gray-700">
                Efficiently track, manage, and update your inventory to prevent overstock or stockouts with our integrated solutions.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Order Management</h4>
              <p className="text-gray-700">
                Our system allows you to easily manage customer orders, track deliveries, and ensure timely fulfillment.
              </p>
            </div>
          </div>
        </div>
  
        {/* Additional Information */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-gray-600 mb-4">
            We provide customized, high-performance e-commerce solutions that help businesses scale and thrive in the digital age. Our end-to-end services ensure that you have all the tools necessary to succeed online.
          </p>
          <ul className="list-none pl-6 text-gray-700">
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Fully customizable e-commerce stores
            </li>
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Easy integration with multiple payment gateways
            </li>
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Mobile-friendly and responsive design
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Comprehensive post-launch support and maintenance
            </li>
          </ul>
        </div>
      </div>
    );
  }
  