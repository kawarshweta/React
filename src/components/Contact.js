import { useState } from "react";
import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left info section */}
        <div className="space-y-10 animate-fadeInLeft">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-md">
            Have questions, suggestions, or just want to say hi? We're here to help! Reach out to us through the info below or send a message via the form.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: "📞",
                title: "Phone",
                text: "+91 98765 43210",
              },
              {
                icon: "📧",
                title: "Email",
                text: "support@foodexpress.com",
              },
              {
                icon: "📍",
                title: "Address",
                text: "Mumbai, Maharashtra, India",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-5 cursor-pointer group hover:text-orange-600 transition"
              >
                <div className="text-orange-500 text-3xl group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form section */}
        <div className="animate-fadeInRight min-h-[480px] flex flex-col">
          {/* Hide heading on submitted */}
          {!submitted && (
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Send us a message</h2>
          )}

          {submitted ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-600 mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-green-700 font-semibold text-xl mb-4">
                Thanks for reaching out!
              </p>
              <p className="text-green-600 max-w-sm">
                We’ve received your message and will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 flex-grow flex flex-col bg-gray-50 rounded-2xl p-12 shadow-lg">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orange-300 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orange-300 transition"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orange-300 transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-xl shadow-md transition transform hover:scale-105 mt-auto"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Animations via Tailwind plugin or add these styles in global CSS */}
      <style>
        {`
          @keyframes fadeInLeft {
            0% {opacity: 0; transform: translateX(-40px);}
            100% {opacity: 1; transform: translateX(0);}
          }
          @keyframes fadeInRight {
            0% {opacity: 0; transform: translateX(40px);}
            100% {opacity: 1; transform: translateX(0);}
          }
          .animate-fadeInLeft {
            animation: fadeInLeft 0.8s ease forwards;
          }
          .animate-fadeInRight {
            animation: fadeInRight 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
