import { Link } from "react-router-dom";

export default function AppDevelopment() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-richblack-700 font-bold text-3xl p-3">Mobile App Development</h2>
  
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
            We specialize in crafting high-performance, scalable, and secure mobile applications for both iOS and Android. Our team follows a strategic approach to ensure your app delivers a seamless user experience and exceeds expectations.
          </p>
  
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Strategic Consultation</h4>
              <p className="text-gray-700">
                We provide strategic consultation to help shape your app's vision and ensure its success in the market.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">App User Experience</h4>
              <p className="text-gray-700">
                Our design team focuses on creating intuitive and delightful user experiences that keep users engaged.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">App Testing Assurance</h4>
              <p className="text-gray-700">
                We perform comprehensive testing to ensure that your app is bug-free and provides a seamless experience.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">App Management</h4>
              <p className="text-gray-700">
                We offer ongoing app management services, including updates, bug fixes, and performance optimization.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Mobile App Analysis</h4>
              <p className="text-gray-700">
                Our team conducts in-depth analysis to identify areas of improvement, enhancing app performance and user engagement.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Mobile App Security</h4>
              <p className="text-gray-700">
                Security is our priority. We implement advanced security measures to protect your app and users' data.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Code Quality</h4>
              <p className="text-gray-700">
                We adhere to best practices and high standards of coding to ensure your app is maintainable and scalable.
              </p>
            </div>
  
            {/* New Expertise Section */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">App Architecture</h4>
              <p className="text-gray-700">
                We design scalable and maintainable app architectures that ensure smooth performance as your app grows.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">App Modernization</h4>
              <p className="text-gray-700">
                We help you modernize legacy apps with the latest technologies to keep them competitive and user-friendly.
              </p>
            </div>
          </div>
        </div>
  
        {/* Additional Information */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-gray-600 mb-4">
            We pride ourselves on our commitment to quality, timely delivery, and customer satisfaction. By choosing us as your mobile app development partner, you get access to a team that understands the intricacies of the market and leverages the latest technology to build high-performing, secure, and scalable applications.
          </p>
          <ul className="list-none pl-6 text-gray-700">
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              End-to-end mobile app development services
            </li>
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Expert team with years of industry experience
            </li>
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Focus on user-centric design and usability
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Comprehensive post-launch support
            </li>
          </ul>
        </div>
      </div>
    );
  }
  