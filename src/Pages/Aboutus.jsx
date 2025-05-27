import AboutIntro from "../Components/Aboutus/AboutIntro";
import BrandCollaborations from "../Components/Aboutus/BrandCollaborations";
import DesignShowcase from "../Components/Aboutus/DesignShowcase";
import StructuresShowcase from "../Components/Aboutus/StructuresShowcase";
import VideoBanner from "../Components/Aboutus/VideoBanner";
import Testimonials from "../Components/Homepage/Testimonials";
import AnimatedSection from "../Components/AnimatedSection";
const Aboutus = () => {
  return (
    <div className="overflow-x-hidden">
      <AnimatedSection animationClass="fade-in">
        <AboutIntro />
      </AnimatedSection>

      <AnimatedSection animationClass="slide-up" threshold={0.2}>
        <DesignShowcase />
      </AnimatedSection>

      <AnimatedSection animationClass="slide-in-left">
        <StructuresShowcase />
      </AnimatedSection>

      <AnimatedSection animationClass="slide-in-left">
        <BrandCollaborations />
      </AnimatedSection>

      <AnimatedSection animationClass="fade-in" threshold={0.5}>
        <VideoBanner />
      </AnimatedSection>

      <AnimatedSection animationClass="slide-up">
        <Testimonials />
      </AnimatedSection>
    </div>
  );
};

export default Aboutus;
