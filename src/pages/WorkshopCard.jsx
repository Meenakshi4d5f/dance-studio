import React, { useState } from "react";

const workshopData = [
  {
    artist: "Kiana Brown",
    song: "On My Mama",
    duration: "90 minutes",
    date: "August 5, 2025",
    day: "Saturday",
    amount: "₹500",
  },
  {
    artist: "Alaxender Noel",
    song: "Feel the Beat",
    duration: "75 minutes",
    date: "August 7, 2025",
    day: "Monday",
    amount: "₹450",
  },
  {
    artist: "Akanksha Sharma",
    song: "Desi Groove",
    duration: "60 minutes",
    date: "August 9, 2025",
    day: "Wednesday",
    amount: "₹400",
  },
  {
    artist: "Nidhi Kapoor",
    song: "Grace in Motion",
    duration: "80 minutes",
    date: "August 12, 2025",
    day: "Saturday",
    amount: "₹550",
  },
  {
    artist: "Ray Diaz",
    song: "Rhythm Riot",
    duration: "100 minutes",
    date: "August 15, 2025",
    day: "Tuesday",
    amount: "₹600",
  },
  {
    artist: "Leila Singh",
    song: "Soulful Steps",
    duration: "90 minutes",
    date: "August 18, 2025",
    day: "Friday",
    amount: "₹500",
  },
];

export default function Workshops() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", paymentMethod: "UPI" });
  const [submitted, setSubmitted] = useState(false);

  const openModal = (workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", paymentMethod: "UPI" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-10">Upcoming Workshops</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {workshopData.map((workshop, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-pink-300 transition-transform hover:scale-105 duration-300"
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-2 text-center">{workshop.artist}</h2>
            <p className="text-md text-gray-600 text-center italic mb-4">"{workshop.song}"</p>

            <div className="space-y-2 text-sm text-gray-700 font-medium">
              <p>
                <span className="text-pink-500 font-semibold">Duration:</span> {workshop.duration}
              </p>
              <p>
                <span className="text-pink-500 font-semibold">Date:</span> {workshop.date}
              </p>
              <p>
                <span className="text-pink-500 font-semibold">Day:</span> {workshop.day}
              </p>
              <p>
                <span className="text-pink-500 font-semibold">Amount:</span> {workshop.amount}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => openModal(workshop)}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="text-center text-green-600 font-semibold text-xl">
                Redirecting to payment page..
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-center text-pink-600 mb-4">
                  Book for {selectedWorkshop?.artist}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                      type="text"
                      value={selectedWorkshop?.amount}
                      disabled
                      className="w-full px-3 py-2 border bg-gray-100 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Payment Option</label>
                    <select
                      value={formData.paymentMethod}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                    >
                      <option value="UPI">UPI</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Net Banking">Net Banking</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Proceed
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
