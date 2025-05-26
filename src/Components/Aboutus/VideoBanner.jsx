import Video from "../../assets/Video.mp4";

const VideoBanner = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden font-sans">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          // Replace with your actual video URL
          src={Video}
          onError={(e) => {
            console.error("Video failed to load:", e);
            // Fallback for video not loading, e.g., show a static background image
            e.target.style.display = "none"; // Hide the broken video element
            e.target.parentNode.style.backgroundImage =
              "url(https://placehold.co/1920x1080/4A5568/FFFFFF?text=Video+Unavailable)";
            e.target.parentNode.style.backgroundSize = "cover";
            e.target.parentNode.style.backgroundPosition = "center";
          }}
        >
          Your browser does not support the video tag.
        </video>

        {/* Light Black Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4 text-center">
          {/* Play Button Icon */}
          <div className="mb-8 p-4 bg-[#ff9100] rounded-full shadow-lg cursor-pointer flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32">
            {/* Simple SVG Play Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 sm:w-16 sm:h-16 text-white"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.307 2.796-1.646l11.54 6.348c1.267.697 1.267 2.607 0 3.304l-11.54 6.347c-1.267.66-2.796-.217-2.796-1.646V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-4">
            The Power to Make Anything
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-8 px-4">
            Mirum est notare quam littera gothica , quam nunc putamus parum
            claram , anteposuerit litterarum formas humanitatis per seacula
            quarta decima et quinta decima .
          </p>

          {/* Contact Us Button */}
          <button className="bg-[#ff9100] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out text-lg">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoBanner;
