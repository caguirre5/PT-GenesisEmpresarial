import React, { useState } from 'react';

interface AppointmentFormProps {
  onSubmit: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && department && time) {
      setSubmitted(true);
      onSubmit();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg  h-[600px]">
      {!submitted ? (
        <form onSubmit={handleSubmit} >
          <h2 className="text-2xl font-semibold mb-6 text-[#252b42]">Book Appointment</h2>
          <div className="mb-5">
            <label className="text-start block text-gray-700 font-medium mb-2">Name*</label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="mb-5">
            <label className="text-start block text-gray-700 font-medium mb-2">Email*</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-gray-700 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="mb-5">
            <label className="text-start block text-gray-700 font-medium mb-2">Department *</label>
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
          <div className="mb-5">
            <label className="text-start block text-gray-700 font-medium mb-2">Time *</label>
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
          <button type="submit" className="w-full bg-[#295c7a] text-white p-3 rounded-lg font-medium hover:bg-[#387fa7] transition duration-200">
            Book Appointment
          </button>
        </form>
      ) : (
        <div className="text-center flex flex-col justify-center items-center h-full">
          <h2 className="text-[#252b42] text-2xl font-semibold mb-4">Appointment Booked</h2>
          <p className="text-[#252b42]">Your appointment has been successfully booked.</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
