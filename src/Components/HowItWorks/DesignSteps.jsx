import Step1 from "../../assets/step1.png";
import Step2 from "../../assets/step2.png";
import Step3 from "../../assets/step3.png";
import Step4 from "../../assets/step4.png";

const steps = [
  {
    title: "Share Your Space & Style",
    number: "1",
    highlight: "Space & Style",
    image: Step1,
  },
  {
    title: "Collaborate With Your Designer",
    number: "2",
    highlight: "Designer",
    image: Step2,
  },
  {
    title: "Receive Your Custom Moodboard",
    number: "3",
    highlight: "Moodboard",
    image: Step3,
  },
  {
    title: "Style Your Space With Confidence",
    number: "4",
    highlight: "Confidence",
    image: Step4,
  },
];

const DesignSteps = () => {
  return (
    <section className="w-full">
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#052536] leading-10">
          Online Design Made <br />
          <span className="text-orange-400">Simple - Step By Step</span>
        </h2>
      </div>
      <div className="md:hidden px-4">
        {steps.map((step, idx) => (
          <img
            key={`img-${idx}`}
            src={step.image}
            alt={`Step ${step.number}`}
            className="w-full mb-4 rounded-lg"
          />
        ))}
        {steps.map((step, idx) => (
          <div key={`text-${idx}`} className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-400 text-white font-bold text-2xl">
              {step.number}
            </div>
            <p className="text-gray-800 text-left text-base">
              {step.title.split(step.highlight)[0]}
              <span className="text-orange-400 font-semibold">
                {step.highlight}
              </span>
              {step.title.split(step.highlight)[1]}
            </p>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } w-full`}
          >
            <div className="w-1/2">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`w-1/2 flex items-center justify-center ${
                idx % 2 === 0 ? "bg-[#052536]" : "bg-white"
              }`}
            >
              <div
                className={`max-w-md p-8 ${
                  idx % 2 === 0 ? "text-white" : "text-[#052536]"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-400 text-white font-bold text-2xl mr-4">
                    {step.number}
                  </div>
                  <p className="text-2xl font-medium leading-snug">
                    {step.title.split(step.highlight)[0]}
                    <span className="text-orange-400 font-semibold">
                      {step.highlight}
                    </span>
                    {step.title.split(step.highlight)[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignSteps;
