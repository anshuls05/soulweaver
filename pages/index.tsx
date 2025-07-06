export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero section */}
      <div className="bg-[#f7f8f9] px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Schedule your next therapy session</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600">
          Soul Weaver helps you book 1-on-1 therapy instantly.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>

      {/* Features section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Why Soul Weaver?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Flexible Booking</h3>
            <p className="text-gray-600">Choose your therapist’s available time slot — no back and forth.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Google Meet Integration</h3>
            <p className="text-gray-600">Automatically get a Meet link for every session.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Simple Payments</h3>
            <p className="text-gray-600">Pay ₹99 online securely using Razorpay.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Soul Weaver · All rights reserved.
      </footer>
    </div>
  );
}
