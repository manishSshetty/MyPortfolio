import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="px-4 md:px-6 pt-24 md:pt-32 pb-16">
  
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4">
            CONTACT.EXE
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Ready to collaborate on your next project? Let's connect and build
            something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-gray-300 p-6 sm:p-8 mb-16">
            <h2 className="text-2xl font-mono font-bold mb-6">SEND MESSAGE</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono font-bold text-gray-700 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono font-bold text-gray-700 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500  cursor-pointer"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono font-bold text-gray-700 mb-2">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500  cursor-pointer"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono font-bold text-gray-700 mb-2">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-vertical  cursor-pointer"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 font-mono hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send />
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-mono font-bold mb-8">GET IN TOUCH</h2>

            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-300 p-6 flex items-center gap-4  hover:bg-gray-50 cursor-pointer">
                <Mail />
                <div>
                  <div className="text-sm text-gray-600 font-mono">EMAIL</div>
                  <div className="font-mono">manishshetty827@gmail.com</div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6 flex items-center gap-4  hover:bg-gray-50 cursor-pointer">
                <Phone />
                <div>
                  <div className="text-sm text-gray-600 font-mono">PHONE</div>
                  <div className="font-mono">+91 9632597428</div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6 flex items-center gap-4 hover:bg-gray-50 cursor-pointer">
                <MapPin />
                <div>
                  <div className="text-sm text-gray-600 font-mono">
                    LOCATION
                  </div>
                  <div className="font-mono">Bengaluru</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-mono font-bold mb-8">SOCIAL LINKS</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-gray-300 p-6 text-center flex flex-col items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer">
                <div className="mb-2">
                  <Github />
                </div>
                <div className="font-mono font-bold">GITHUB</div>
              </div>

              <div className="bg-white border-2 border-gray-300 p-6 text-center flex flex-col items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer">
                <div className="mb-2">
                  <Linkedin />
                </div>
                <div className="font-mono font-bold">LINKEDIN</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
