import { Link } from "react-router-dom";

export default function WebDevelopment() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-richblack-700 font-bold text-3xl p-3">Web Development</h2>
  
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
            We specialize in building scalable, high-performance websites that offer seamless user experiences. From custom websites to CMS-based solutions, we ensure your online presence is powerful, engaging, and user-friendly.
          </p>
  
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Custom Web Design</h4>
              <p className="text-gray-700">
                We create visually appealing, responsive websites tailored to your business needs and branding.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Content Management Systems</h4>
              <p className="text-gray-700">
                Manage your website effortlessly with popular CMS platforms like WordPress, Joomla, and more.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">E-commerce Web Development</h4>
              <p className="text-gray-700">
                We build fully functional, secure, and scalable e-commerce websites that help you sell online efficiently.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">SEO Optimization</h4>
              <p className="text-gray-700">
                We optimize your website to improve its visibility on search engines, driving more organic traffic.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Responsive Web Design</h4>
              <p className="text-gray-700">
                Your website will look great and function smoothly across all devices, from desktop to mobile.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Web Application Development</h4>
              <p className="text-gray-700">
                We create interactive and feature-rich web applications that enhance user engagement and business processes.
              </p>
            </div>
          </div>
        </div>
  
        {/* Additional Information */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-gray-600 mb-4">
            We are a team of dedicated web developers committed to building websites that not only look good but also provide superior functionality. Our solutions are designed to drive user engagement and conversion, ensuring your business stands out online.
          </p>
          <ul className="list-none pl-6 text-gray-700">
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Custom-designed websites that match your business goals
            </li>
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Expertise in both front-end and back-end web development
            </li>
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              SEO-friendly websites to help boost organic traffic
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Ongoing maintenance and support after launch
            </li>
          </ul>
        </div>
      </div>
    );
  }
  