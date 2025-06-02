import { CheckCircle, Mail } from "lucide-react";
import Logo from "../assets/Logo.png";
import ImgPreview from "../assets/ImgPreview.png";
import Shiprocket from "../assets/Shiprocket.png";

const OrderSummaryCard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Mail className="text-white bg-[#ff9100] rounded-full p-2 w-12 h-12" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold">
          <span className="text-[#ff9100]">Thank You</span> For The Purchase
        </h2>
        <p className="text-base mt-4 text-gray-600 flex items-center gap-1">
          Design will be delivered in 3–4 working days via email and{" "}
          <span className="inline-flex items-center">
            <img src={Shiprocket} alt="Shiprocket" className="h-5 ml-1" />
          </span>
        </p>
      </div>
      <div className="bg-white w-fit shadow-2xl px-16 py-20 border border-gray-200">
        <div className="mb-10 flex flex-col items-center">
          <img src={Logo} alt="Vedoo" className="h-12 mb-2" />
          <div className="flex items-center text-[#008000] text-base font-medium">
            <CheckCircle className="w-5 h-5 mr-2" />
            Payment Successful
          </div>
        </div>

        {/* Payment ID */}
        <div className="text-base text-gray-700 mb-6">
          <span className="font-semibold text-gray-800">Payment ID:</span>{" "}
          1458BFGQ
        </div>

        {/* Plan Info */}
        <div className="flex items-start gap-6 border-b border-gray-200 pb-6 mb-6">
          <img
            src={ImgPreview}
            alt="Plan"
            className="w-24 h-24 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-xl">Enterprise Plan</h3>
            <p className="text-sm text-gray-600 mt-1">MIKE B</p>
            <p className="text-sm text-gray-600">Mar 20, Sunday</p>
            <p className="text-sm text-gray-600">Shanti nagar, Bengaluru</p>
          </div>
          <div className="text-right text-gray-900 font-semibold text-xl">
            ₹69,999
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center text-gray-900">
          <div>
            <div className="font-semibold text-lg">Total</div>
            <div className="text-sm text-gray-500">
              Including 18% GST in taxes
            </div>
          </div>
          <div className="text-2xl font-semibold">₹69,999</div>
        </div>
      </div>

      {/* Proceed Button */}
      <button className="mt-10 bg-[#ff9100] hover:bg-[#ff7a00] text-white text-base px-10 py-3 transition-all">
        CLICK TO PROCEED →
      </button>
    </div>
  );
};

export default OrderSummaryCard;
