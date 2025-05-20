// HeroSection.jsx
export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center px-6 md:px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')", // Replace with your actual image
      }}
    >
      <div className="text-white max-w-3xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Online Interior Design For <br />
          <span className="text-orange-500">Every Room And Budget.</span>
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          Tailored, stylish interiors that blend comfort, function, and personal taste.
        </p>
        <button className="border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-black transition">
          MOODBOARD
        </button>
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}
