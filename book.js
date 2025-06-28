import { useState } from 'react';

export default function Book() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Booking submitted! Google Meet + Razorpay integrations go here.');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h2>Book Your Therapy Session</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <input placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" type="email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Phone Number" required onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input type="date" required onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <input type="time" required onChange={(e) => setForm({ ...form, time: e.target.value })} />
        <button type="submit" style={{ marginTop: 20, padding: '0.5rem', backgroundColor: '#0070f3', color: '#fff' }}>
          Confirm Booking (₹99)
        </button>
      </form>
    </div>
  );
}
