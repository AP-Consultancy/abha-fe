import React from "react";

const HowToApplySection: React.FC = () => {
  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            📝 Admission Process
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your child's future by following these simple steps.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 space-y-12">
              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4">
                      1️⃣
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      Collect the admission form from the school office or
                      download online.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4">
                      2️⃣
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      Submit the filled form with required documents.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4">
                      3️⃣
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      Attend student & parent orientation (if applicable).
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4">
                      4️⃣
                    </div>
                    <p className="text-gray-700 text-lg font-medium">
                      Admission confirmation and fee submission.
                    </p>
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    📄 Documents Required
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Birth Certificate",
                      "Previous Report Card",
                      "Transfer Certificate",
                      "Passport-size Photographs",
                      "Aadhar Card",
                      "PEN No. (Permanent Education Number)",
                      "APAAR ID (Automated Permanent Academic Account Registry)",
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-600 mr-3">✓</span>
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Notification */}
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg text-center text-lg font-semibold">
                🔔 Admissions Open for 2025–2026 – Enroll now!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApplySection;
