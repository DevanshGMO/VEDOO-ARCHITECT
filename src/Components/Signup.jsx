import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";
import Googleicon from "../assets/Googleicon.png";
import House4 from "../assets/House4.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-64 md:h-auto"
      >
        <img
          src={House4}
          alt="Villa"
          className="object-cover w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center p-8"
      >
        <div className="max-w-md w-full space-y-6">
          <div className="text-center">
            <img src={Logo} alt="Vedoo Logo" className="mx-auto h-12" />
            <h2 className="mt-4 text-xl font-semibold">Create an account</h2>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#FF9100] transition"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#FF9100] transition"
            />
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-[#FF9100] transition"
            />
            <button
              type="submit"
              className="w-full bg-[#FF9100] text-white py-3 hover:bg-[#FF9100] transition"
            >
              Sign up
            </button>
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                className="w-full bg-gray-800 text-white py-3 hover:bg-gray-700 transition flex items-center justify-center gap-2"
              >
                <img src={Googleicon} alt="G" className="h-5" />
                Or sign up with Google
              </button>
            </div>
          </form>

          {/* Footer note */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/Login" className="text-[#FF9100] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
