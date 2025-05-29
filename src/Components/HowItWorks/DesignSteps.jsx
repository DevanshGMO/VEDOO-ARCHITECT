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
    description: "Tell us about your room, your preferences, and what you envision. Upload photos and let us know your design goals.",
  },
  {
    title: "Collaborate With Our Designer",
    number: "2",
    highlight: "Designer",
    image: Step2,
    description: "Our expert designers will work closely with you, understanding your needs to create a personalized design solution.",
  },
  {
    title: "Choose Custom Moodboard",
    number: "3",
    highlight: "Moodboard",
    image: Step3,
    description: "Get a custom moodboard with furniture, decor, and color palettes tailored to your style and space.",
  },
  {
    title: "Style Your Space With Confidence",
    number: "4",
    highlight: "Confidence",
    image: Step4,
    description: "With your new design and shopping list, you'll have everything you need to bring your dream space to life.",
  },
];

const DesignSteps = () => {
  return (
    <section className="w-full">
      <div className="text-center py-6 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#052536] md:leading-tight mb-10">
          Online Design Made <br />
          <span className="text-orange-400">Simple - Step By Step</span>
        </h2>
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-4">
        {steps.map((step, idx) => (
          <div key={idx} className="mb-10"> {/* Increased bottom margin for better spacing between steps */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-400 text-white font-bold text-xl flex-shrink-0">
                {step.number}
              </div>
              <p className="text-xl font-semibold text-gray-800 leading-snug pt-2"> {/* Added padding top for better vertical alignment with number */}
                {step.title.split(step.highlight)[0]}
                <span className="text-orange-400">
                  {step.highlight}
                </span>
                {step.title.split(step.highlight)[1]}
              </p>
            </div>
            <img
              src={step.image}
              alt={`Step ${step.number}`}
              className="w-full mb-4 rounded-lg"
            />
            <p className="text-base text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop View */}
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
              className={`w-1/2 flex items-center justify-center py-16 ${ /* Added vertical padding for content block */
                idx % 2 === 0 ? "bg-[#052536]" : "bg-white"
              }`}
            >
              <div
                className={`max-w-md px-8 ${ /* Adjusted horizontal padding */
                  idx % 2 === 0 ? "text-white" : "text-[#052536]"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-400 text-white font-bold text-3xl mr-6 flex-shrink-0">
                    {step.number}
                  </div>
                  <p className="text-3xl font-medium leading-snug">
                    {step.title.split(step.highlight)[0]}
                    <span className="text-orange-400 font-semibold">
                      {step.highlight}
                    </span>
                    {step.title.split(step.highlight)[1]}
                  </p>
                </div>
                <p className={`mt-4 text-lg ${idx % 2 === 0 ? "text-gray-200" : "text-gray-700"}`}>
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignSteps;