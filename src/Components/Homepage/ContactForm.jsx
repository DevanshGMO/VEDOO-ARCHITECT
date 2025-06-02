import Contactform from "../.././assets/Contactform.png";

export default function ContactForm() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen items-stretch">
      <div
        className="md:w-1/2 w-full relative bg-cover bg-center min-h-[300px] md:min-h-auto"
        style={{
          backgroundImage: `url(${Contactform})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-start px-6 md:px-10">
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-  tight mb-4">
              Luxury Residence
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
              Living Room
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FF9100]">
              Interior Design
            </h1>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full bg-[#052C41] text-white p-6 sm:p-10 md:p-16 flex flex-col justify-center flex-grow">
        <form className="w-full space-y-8">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-10">
            GET IN TOUCH WITH US
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
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

          <div className="flex flex-col md:flex-row gap-6">
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
            <label className="block mb-4 font-medium text-sm">
              Select Subject?
            </label>
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-white">
              {["General Inquiry", "Quotation", "Design Request"].map((item, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="subject"
                    value={item.toLowerCase().replace(/\s+/g, "")}
                    className="accent-[#FF9100]"
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
            className="bg-[#FF9100] text-white px-6 py-3 hover:bg-orange-600 transition w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
