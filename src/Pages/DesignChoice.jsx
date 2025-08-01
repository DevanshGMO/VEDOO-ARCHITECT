import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/MoodSelection/m1.png"
import img2 from "../assets/MoodSelection/m2.png"
import img3 from "../assets/MoodSelection/m3.png"
import img4 from "../assets/MoodSelection/m4.png"
import img5 from "../assets/MoodSelection/m5.png"
import img6 from "../assets/MoodSelection/m6.png"
import img7 from "../assets/MoodSelection/m7.png"
import img8 from "../assets/MoodSelection/m8.png"
import img9 from "../assets/MoodSelection/m9.png"
import img10 from "../assets/MoodSelection/m10.png"

const choicesData = [
  { leftImg: img1, rightImg: img2 },
  { leftImg: img3, rightImg: img4 },
  { leftImg: img5, rightImg: img6 },
  { leftImg: img7, rightImg: img8 },
  { leftImg: img9, rightImg: img10 },
];

const DesignChoice = () => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const totalSteps = choicesData.length;

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    const updatedSelections = [...selections, selected];
    setSelections(updatedSelections);
    setSelected(null);

    if (step + 1 < totalSteps) {
      setStep(step + 1);
    } else {
      navigate('/pricing');
    }
  };

  const handleSkip = () => {
    setSelections([...selections, null]);
    setSelected(null);

    if (step + 1 < totalSteps) {
      setStep(step + 1);
    } else {
      navigate('/pricing');
    }
  };

  const current = choicesData[step];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-3xl mb-6">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Pick The <span className="text-[#FF9100]">Design</span> That Speaks To You
        </h2>
        <div className="flex justify-between items-center mt-6 px-2">
          {[...Array(totalSteps)].map((_, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div
                className={`w-4 h-4 rounded-full ${
                  idx === step ? 'bg-[#FF9100]' : 'bg-gray-400'
                }`}
              ></div>
              <p className="text-[10px] mt-1">Choice {idx + 1}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-4xl">
        <img
          src={current.leftImg}
          alt="Choice Left"
          onClick={() => handleSelect('left')}
          className={`cursor-pointer border-4 ${
            selected === 'left' ? 'border-[#FF9100]' : 'border-transparent'
          } w-full md:w-1/2 object-cover`}
        />
        <span className="font-bold text-xl text-gray-600">OR</span>
        <img
          src={current.rightImg}
          alt="Choice Right"
          onClick={() => handleSelect('right')}
          className={`cursor-pointer border-4 ${
            selected === 'right' ? 'border-[#FF9100]' : 'border-transparent'
          } w-full md:w-1/2 object-cover`}
        />
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={handleNext}
          disabled={!selected}
          className="bg-[#FF9100] text-white px-6 py-2 disabled:opacity-50"
        >
          Next
        </button>
        <button
          onClick={handleSkip}
          className="text-gray-500 underline text-sm mt-2"
        >
          Skip
        </button>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-[#FF9100] text-white px-4 py-2 rounded-full shadow-lg">
          Let’s Have A Chat ?
        </button>
      </div>
    </div>
  );
};

export default DesignChoice;
