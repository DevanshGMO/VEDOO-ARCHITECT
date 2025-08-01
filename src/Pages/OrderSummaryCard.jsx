import { CheckCircle, Mail } from "lucide-react";
import Logo from "../assets/Logo.png";
import ImgPreview from "../assets/ImgPreview.png";
import Shiprocket from "../assets/Shiprocket.png";

const OrderSummaryCard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center mb-3 sm:mb-4">
          <Mail className="text-white bg-[#ff9100] rounded-full p-2 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          <span className="text-[#ff9100]">Thank You</span> For The Purchase
        </h2>
        <p className="text-sm sm:text-base mt-3 sm:mt-4 text-gray-600 flex flex-wrap justify-center items-center gap-1">
          Design will be delivered in 3–4 working days via email and{" "}
          <span className="inline-flex items-center">
            <img
              src={Shiprocket}
              alt="Shiprocket"
              className="h-4 sm:h-5 ml-1"
            />
          </span>
        </p>
      </div>
      <div className="bg-white w-full max-w-md md:max-w-lg shadow-2xl px-6 py-8 sm:px-10 sm:py-12 border border-gray-200">
        <div className="mb-8 flex flex-col items-center">
          <img src={Logo} alt="Vedoo" className="h-10 sm:h-12 mb-2" />
          <div className="flex items-center text-[#008000] text-sm sm:text-base font-medium">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Payment Successful
          </div>
        </div>

        {/* Payment ID */}
        <div className="text-sm sm:text-base text-gray-700 mb-6">
          <span className="font-semibold text-gray-800">Payment ID:</span>{" "}
          1458BFGQ
        </div>

        {/* Plan Info */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border-b border-gray-200 pb-6 mb-6">
          <img
            src={ImgPreview}
            alt="Plan"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md flex-shrink-0"
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 text-lg sm:text-xl">
              Enterprise Plan
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">MIKE B</p>
            <p className="text-xs sm:text-sm text-gray-600">Mar 20, Sunday</p>
            <p className="text-xs sm:text-sm text-gray-600">
              Shanti nagar, Bengaluru
            </p>
          </div>
          <div className="w-full sm:w-auto text-right text-gray-900 font-semibold text-lg sm:text-xl mt-2 sm:mt-0">
            ₹69,999
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center text-gray-900">
          <div>
            <div className="font-semibold text-base sm:text-lg">Total</div>
            <div className="text-xs sm:text-sm text-gray-500">
              Including 18% GST in taxes
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-semibold">₹69,999</div>
        </div>
      </div>

      {/* Proceed Button */}
      <button className="mt-8 sm:mt-10 bg-[#ff9100] hover:bg-[#ff7a00] text-white text-sm sm:text-base px-8 py-3 sm:px-10 transition-all w-full max-w-md md:max-w-lg">
        CLICK TO PROCEED →
      </button>
    </div>
  );
};

export default OrderSummaryCard;
