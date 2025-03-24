import { Link } from "react-router-dom";

export default function EmailHosting() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-richblack-700 font-bold text-3xl p-3">Email Hosting</h2>
  
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
            Our email hosting services provide secure, reliable, and scalable email solutions for businesses of all sizes. We ensure seamless communication with advanced features such as custom domains, spam protection, and high deliverability rates.
          </p>
  
          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Custom Domain Emails</h4>
              <p className="text-gray-700">
                Use your own domain to create professional email addresses that build trust with your customers.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Spam Protection</h4>
              <p className="text-gray-700">
                Our spam filters ensure your inbox stays clean and free from unwanted emails.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">High Deliverability</h4>
              <p className="text-gray-700">
                Ensure your emails reach the intended recipient with high deliverability rates and reliability.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">24/7 Support</h4>
              <p className="text-gray-700">
                Our support team is available 24/7 to help you with any issues related to your email hosting.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Scalable Plans</h4>
              <p className="text-gray-700">
                Choose from various plans to meet the specific needs of your business, whether you're a small team or a large enterprise.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Advanced Security</h4>
              <p className="text-gray-700">
                We implement advanced encryption and security protocols to protect your sensitive email data.
              </p>
            </div>
          </div>
        </div>
  
        {/* Additional Information */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-gray-600 mb-4">
            Our email hosting services are designed for businesses that need professional, secure, and reliable email solutions. Choose us for your email hosting needs and enjoy exceptional support, robust security, and unbeatable uptime.
          </p>
          <ul className="list-none pl-6 text-gray-700">
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Custom email domain for your business
            </li>
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Powerful spam filters to protect your inbox
            </li>
            <li className="mb-3 hover:text-blue-600 transition-colors duration-300">
              Reliable and high deliverability email service
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300">
              Dedicated 24/7 customer support
            </li>
          </ul>
        </div>
      </div>
    );
  }
  