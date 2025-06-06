import React from "react";
import MoodboardSection from "../Components/MoodboardComp/MoodboardSection";
import MoodServices from "../Components/MoodboardComp/MoodServices";
import VideoTour from "../Components/Homepage/VideoTour";
import KitchenIntro from "../Components/MoodboardComp/KitchenIntro";
import LivingRoomIntro from "../Components/MoodboardComp/LivingRoomIntro";
import BedRoomIntro from "../Components/MoodboardComp/BedRoomIntro";
import Testimonials from "../Components/Homepage/Testimonials";
const Moodboard = () => {
  return (
    <>
    <MoodboardSection />
    <MoodServices/>
    <VideoTour />
    <KitchenIntro/>
    <LivingRoomIntro/>
    <BedRoomIntro/>
    <Testimonials/>
    </>
  );
};

export default Moodboard;
