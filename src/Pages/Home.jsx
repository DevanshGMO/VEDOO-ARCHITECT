
import HeroBanner from "../Components/Homepage/HeroBanner";
import MissionDesign from "../Components/Homepage/MissionDesign";
import VideoTour from "../Components/Homepage/VideoTour";
import DesignMoodboard from "../Components/Homepage/DesignMoodboard";
import AboutCompany from "../Components/Homepage/AboutCompany";
import MoodServices from "../Components/MoodboardComp/MoodServices";
import Testimonials from "../Components/Homepage/Testimonials";
import ContactForm from "../Components/Homepage/ContactForm";
import BeforeAfterSlider from "../Components/Homepage/BeforeAfterSlider";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <VideoTour />
      <MoodServices />
      <BeforeAfterSlider/>
      <MissionDesign />
      <DesignMoodboard />
      <AboutCompany />
      <ContactForm />
      <Testimonials />
    </>
  );
};

export default Home;
