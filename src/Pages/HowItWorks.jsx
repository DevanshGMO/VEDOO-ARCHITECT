import AboutSection from "../Components/HowItWorks/AboutSection";
import DecorSection from "../Components/HowItWorks/DecorSection";
import DesignSteps from "../Components/HowItWorks/DesignSteps";
import LuxuryResidenceSection from "../Components/HowItWorks/LuxuryResidenceSection"
import ContactForm from "../Components/Homepage/ContactForm";
import FeaturedTable from "../Components/HowItWorks/FeaturedTable"
const HowItWorks = () => {
  return (
    <div>
      <AboutSection />
      <DecorSection />
      <DesignSteps />
      <LuxuryResidenceSection />
      <FeaturedTable />
      <div className="mb-20">
      <ContactForm />
      </div>
    </div>
  );
};

export default HowItWorks;
