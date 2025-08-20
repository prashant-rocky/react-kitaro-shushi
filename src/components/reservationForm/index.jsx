import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookATable = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: "",
      requests: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="container py-5">
      {!submitted ? (
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <h2 className="text-center mb-4 fw-bold text-dark">Book a Table</h2>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="123-456-7890"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Time</label>
              <input
                type="time"
                className="form-control"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Guests</label>
              <input
                type="number"
                className="form-control"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                min="1"
                placeholder="Number of guests"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Special Requests</label>
              <textarea
                className="form-control"
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                rows="3"
                placeholder="Any special request?"
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-dark px-5 py-2 mt-3">
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card shadow-lg border-0 rounded-4 text-center p-5 bg-light">
          <h3 className="text-success fw-bold mb-3">🎉 Thank You!</h3>
          <p className="lead">Your table has been booked successfully.</p>
          <ul className="list-unstyled mt-3">
            <li><strong>Name:</strong> {formData.name}</li>
            <li><strong>Date:</strong> {formData.date}</li>
            <li><strong>Time:</strong> {formData.time}</li>
            <li><strong>Guests:</strong> {formData.guests}</li>
          </ul>
          <div className="mt-4">
            <button onClick={resetForm} className="btn btn-outline-dark me-3">
              Book Another
            </button>
            <a href="/" className="btn btn-dark">Go Home</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookATable;
