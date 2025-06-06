import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "./../assets/Logo.png";
import Img from "./../assets/House8.png";
import { motion } from "framer-motion";

const ShippingAddress = () => {
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [sameAsCurrent, setSameAsCurrent] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleCurrentAddressChange = (e) => {
    setCurrentAddress(e.target.value);
    if (sameAsCurrent) {
      setPermanentAddress(e.target.value);
    }
  };

  const handlePermanentAddressChange = (e) => {
    setPermanentAddress(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSameAsCurrentChange = (e) => {
    setSameAsCurrent(e.target.checked);
    if (e.target.checked) {
      setPermanentAddress(currentAddress);
    }
    // No need for else block here, as changing permanentAddress when unchecked
    // would be handled by direct input if desired.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call or data processing
    console.log({
      currentAddress,
      permanentAddress,
      pincode,
    });

    // In a real application, you'd perform validation and then an API call.
    // If the API call is successful:
    // alert("Shipping address submitted!"); // Remove this alert for better UX
    setCurrentAddress("");
    setPermanentAddress("");
    setPincode("");
    setSameAsCurrent(false);

    // Redirect to the order confirmation page
    navigate("/ordersummary");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-64 md:h-auto"
      >
        <img src={Img} alt="Villa" className="object-cover w-full h-full" />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={showForm ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="w-full md:w-1/2 flex items-center justify-center p-4"
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="Vedoo Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6">
            Add Shipping Address
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="currentAddress"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Current Address
              </label>
              <textarea
                id="currentAddress"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-24 resize-none bg-gray-100"
                placeholder="Enter Address"
                value={currentAddress}
                onChange={handleCurrentAddressChange}
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="permanentAddress"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Permanent Address
              </label>
              <textarea
                id="permanentAddress"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-24 resize-none bg-gray-100"
                placeholder="Permanent Address"
                value={permanentAddress}
                onChange={handlePermanentAddressChange}
                disabled={sameAsCurrent}
                required
              ></textarea>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="sameAsCurrent"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                checked={sameAsCurrent}
                onChange={handleSameAsCurrentChange}
              />
              <label
                htmlFor="sameAsCurrent"
                className="ml-2 block text-sm text-gray-900"
              >
                Same as Current Address
              </label>
            </div>

            <div className="mb-6">
              <label
                htmlFor="pincode"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-100"
                value={pincode}
                onChange={handlePincodeChange}
                placeholder=""
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff9100] text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Proceed
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ShippingAddress;