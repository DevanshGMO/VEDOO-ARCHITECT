import { useEffect, useState } from "react";
import Logo from "./../assets/Logo.png";
import Img from "./../assets/House1.png";
import { Link } from "react-router-dom";
import Googleicon from "./../assets/Googleicon.png";
import { motion } from "framer-motion";

const Login = () => {
  const [resendMessage, setResendMessage] = useState("");
  const [animate, setAnimate] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setOtpSent(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleResendOtp = (e) => {
    e.preventDefault();
    setResendMessage("OTP Resent Successfully");
    setTimeout(() => {
      setResendMessage("");
    }, 2000);
  };

  return (  
    <div className="flex flex-col md:flex-row min-h-screen shadow-cyan-500/50">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-64 md:h-auto"
      >
        <img src={Img} alt="Villa" className="object-cover w-full h-full" />
      </motion.div>

      <div
        className={`w-full md:w-1/2 flex items-center justify-center p-6
        transform transition-all duration-700 ease-out delay-300
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <img src={Logo} alt="Vedoo Logo" className="mx-auto h-12" />
            <h2 className="text-xl font-semibold mt-2">Welcome to Vedoo</h2>
          </div>

          <form
            className="space-y-4"
            onSubmit={otpSent ? handleLogin : handleSendOtp}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                maxLength="10"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#FF9100]"
              />
            </div>

            {otpSent && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  OTP
                </label>
                <input
                  type="text"
                  maxLength="6"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#FF9100]"
                />
              </div>
            )}
            {resendMessage && (
              <div className="text-green-600 text-sm text-center">
                {resendMessage}
              </div>
            )}

            <div className="flex justify-center items-center text-sm">
              {otpSent && (
                <button
                  onClick={handleResendOtp}
                  className="text-[#FF9100] hover:underline"
                >
                  Resend OTP
                </button>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF9100] text-white py-2 transition"
            >
              {otpSent ? "Sign In" : "Send OTP"}
            </button>
            <button className="w-full border flex bg-[#052536] text-white justify-center items-center space-x-2 py-2 transition">
              <img src={Googleicon} alt="Google" className="w-5 h-5" />
              <span>Sign in / Sign up with Google</span>
            </button>
            <p className="text-center text-sm">
              Already have an account? {" "}
              <Link to="/signup" className="text-[#FF9100] hover:underline">
                Signup now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
