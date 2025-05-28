import AboutSection from "../Components/HowItWorks/AboutSection";
import DecorSection from "../Components/HowItWorks/DecorSection";
import DesignSteps from "../Components/HowItWorks/DesignSteps";
import LuxuryResidenceSection from "../Components/HowItWorks/LuxuryResidenceSection";
import ContactForm from "../Components/Homepage/ContactForm";
import FeaturedTable from "../Components/HowItWorks/FeaturedTable";
import AnimatedSection from "../Components/AnimatedSection";

const HowItWorks = () => {
  return (
    <div className="overflow-x-hidden">
      <AnimatedSection className="mb-20" animationClass="fade-in">
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection className="mb-20" animationClass="slide-up" threshold={0.2}>
        <DecorSection />
      </AnimatedSection>

      <AnimatedSection className="mb-20" animationClass="slide-in-left">
        <DesignSteps />
      </AnimatedSection>

      <AnimatedSection className="mb-20" animationClass="fade-in threshold={0.5}">
        <LuxuryResidenceSection />
      </AnimatedSection>

      <AnimatedSection className="mb-20" animationClass="slide-up" threshold={0.2}>
        <FeaturedTable />
      </AnimatedSection>

      <div className="mt-20 mb-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default HowItWorks;
