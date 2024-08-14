import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && department && time && message) {
      setSubmitted(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="py-12 px-6 bg-custom-contact min-h-screen text-start flex justify-center items-center">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold  text-[#252b42]">Contact Us</h2>
            <h3 className="text-4xl font-semibold mb-6 text-[#252b42]">Make an Appointment</h3>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="">
                <div className="flex flex-wrap -mx-2 mb-6">
                  <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
                    <label className="block text-gray-700 font-medium mb-2">Full Name*</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-2">
                    <label className="block text-gray-700 font-medium mb-2">Email*</label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-6">
                  <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
                    <label className="block text-gray-700 font-medium mb-2">Department *</label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Please Select</option>
                      <option value="Legal">Legal</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                  <div className="w-full lg:w-1/2 px-2">
                    <label className="block text-gray-700 font-medium mb-2">Time *</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">4:00 Available</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#784f33] text-white p-3 rounded-lg font-medium hover:bg-[#9c6643] transition duration-200"
                >
                  Book Appointment
                </button>
              </form>
            ) : (
              <div className="min-h-[450px] p-8 text-center flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold mb-4">Appointment Booked</h2>
                <p className="text-gray-700">Your appointment has been successfully booked.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
