import React from "react";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Users,
  MessageCircle,
  CalendarCheck,
  Laptop2,
} from "lucide-react";

const ParentSupportAndContact: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="parent-support">
      <div className="container mx-auto px-6">
        {/* Parent Support Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            👨👩👧 Parent Support Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in building strong partnerships with parents to support
            every child’s journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center mb-4 text-blue-600">
              <Users className="w-6 h-6 mr-2" />
              Counselling Cell
            </div>
            <p className="text-gray-700">
              Student and parent guidance by professionals.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center mb-4 text-green-600">
              <CalendarCheck className="w-6 h-6 mr-2" />
              Monthly PTM
            </div>
            <p className="text-gray-700">
              Parent-Teacher Interaction every month.
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center mb-4 text-purple-600">
              <Laptop2 className="w-6 h-6 mr-2" />
              Online Portal
            </div>
            <p className="text-gray-700">
              Track homework, attendance, and notices.
            </p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center mb-4 text-yellow-600">
              <MessageCircle className="w-6 h-6 mr-2" />
              SMS Alerts
            </div>
            <p className="text-gray-700">Stay informed with regular updates.</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="bg-gray-50 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            📍 Contact Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div className="space-y-4">
              <p>
                <MapPin className="inline-block w-5 h-5 text-blue-600 mr-2" />{" "}
                <strong>Address:</strong> 104, Rajeev Nagar, Semra Kalan,
                Bhopal, MP – 462010
              </p>
              <p>
                <Phone className="inline-block w-5 h-5 text-green-600 mr-2" />{" "}
                <strong>Mobile:</strong> +91-9630010201, +91-9753594519
              </p>
              <p>
                <Phone className="inline-block w-5 h-5 text-yellow-600 mr-2" />{" "}
                <strong>Telephone:</strong> +91-7554952296
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <Mail className="inline-block w-5 h-5 text-red-600 mr-2" />{" "}
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:avnhshs1994@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  avnhshs1994@gmail.com
                </a>
              </p>
              <p>
                <Globe className="inline-block w-5 h-5 text-purple-600 mr-2" />{" "}
                <strong>Website:</strong>{" "}
                <span className="text-gray-500">Coming Soon</span>
              </p>
              <p>
                <MapPin className="inline-block w-5 h-5 text-indigo-600 mr-2" />{" "}
                <strong>Google Maps:</strong>{" "}
                <a
                  href="https://maps.app.goo.gl/8kgcp1CNiMuFDJzh8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Location
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentSupportAndContact;
