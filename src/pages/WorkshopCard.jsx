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
    <div className="min-h-screen py-12 px-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/work.jpeg"
          alt="Workshop Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-10">Upcoming Workshops</h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {workshopData.map((workshop, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl shadow-lg p-6 border border-yellow-400 transition-transform hover:scale-105 duration-300"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-2 text-center">{workshop.artist}</h2>
              <p className="text-md text-yellow-100 text-center italic mb-4">"{workshop.song}"</p>

              <div className="space-y-2 text-sm text-yellow-100 font-medium">
                <p>
                  <span className="text-yellow-300 font-semibold">Duration:</span> {workshop.duration}
                </p>
                <p>
                  <span className="text-yellow-300 font-semibold">Date:</span> {workshop.date}
                </p>
                <p>
                  <span className="text-yellow-300 font-semibold">Day:</span> {workshop.day}
                </p>
                <p>
                  <span className="text-yellow-300 font-semibold">Amount:</span> {workshop.amount}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => openModal(workshop)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105"
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
              className="bg-black border border-yellow-400 p-6 rounded-xl shadow-lg w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              {submitted ? (
                <div className="text-center text-green-400 font-semibold text-xl">
                  Redirecting to payment page...
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-center text-yellow-400 mb-4">
                    Book for {selectedWorkshop?.artist}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-yellow-200">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-yellow-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-yellow-200">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-yellow-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-yellow-200">Amount</label>
                      <input
                        type="text"
                        value={selectedWorkshop?.amount}
                        disabled
                        className="w-full px-3 py-2 border border-yellow-400 bg-gray-800 text-white rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-yellow-200">Payment Option</label>
                      <select
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-full px-3 py-2 border border-yellow-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        <option value="UPI">UPI</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Net Banking">Net Banking</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg"
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
    </div>
  );
}
