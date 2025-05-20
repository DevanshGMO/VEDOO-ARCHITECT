import HouseContactForm from "../.././assets/HouseContactForm.png";

export default function ContactForm() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen items-stretch">
      {/* Left Image and Text Section */}
      <div
        className="md:w-1/2 w-full relative bg-cover bg-center min-h-[300px] md:min-h-auto"
        style={{
          backgroundImage:
            "url(" + HouseContactForm + ")",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6 md:px-10">
          <div className="text-white text-center md:text-left">
            <h1 className="text-6xl md:text-4xl font-bold leading-tight mb-2">
              Luxury Residence
            </h1>
            <h1 className="text-6xl md:text-4xl font-bold leading-tight mb-2">
              Living Room
            </h1>
            <h1 className="text-6xl md:text-4xl font-bold text-orange-500">
              Interior Design
            </h1>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="md:w-1/2 w-full bg-[#052C41] text-white p-6 sm:p-10 md:p-16 flex items-center">
        <form className="w-full space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            GET IN TOUCH WITH US
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none placeholder-gray-300 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none placeholder-gray-300 py-2"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none placeholder-gray-300 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none placeholder-gray-300 py-2"
              defaultValue="+91"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm">
              Select Subject?
            </label>
            <div className="flex flex-wrap gap-4 text-sm text-white">
              {["General Inquiry", "Quotation", "Design Request"].map((item, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="subject"
                    value={item.toLowerCase().replace(/\s+/g, "")}
                    className="accent-orange-500"
                    defaultChecked={i === 0}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Write your message.."
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none placeholder-gray-300 resize-none h-24 py-2"
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
