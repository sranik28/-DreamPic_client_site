import { useState } from "react";
import YouTube from "react-youtube";

const VideoSection = () => {
    const videoIds = ["V7z7BAZdt2M", "FRLTOBBkm2I", "Hphv8IOuN0E", "fsd2NUfJkNw"];

    const opts = {
        height: "180",
        width: "320",
        playerVars: {
            autoplay: 0,

        }
    }

    const [currentVideoId, setCurrentVideoId] = useState(videoIds[0]);

    const handleVideoClick = (videoId) => {
        setCurrentVideoId(videoId);
    };

    return (
        <div className="px-3 max-w-[1240px] mx-auto mb-20">
            <motion.div className="my-10 text-center border-indigo-500 border-x-4">
                <h1 className="text-4xl font-bold md:text-6xl">
                    Our Blog <span className="text-[#4c5696]">Video</span>
                </h1>
                <p className="my-2 text-xl ">Before heading out with your camera, take some time to research and plan your shoot. </p>
            </motion.div>
            <div className="flex flex-col items-center mx-2 my-7">
                <div className="w-30">
                    <YouTube videoId={currentVideoId} opts={opts} />
                </div>
                <div className="flex items-center justify-between gap-3 mt-4">
                    {videoIds.map((videoId) => (
                        <div
                            key={videoId}
                            className={`youtube-thumbnail ${videoId === currentVideoId ? "active" : ""
                                }`}
                            onClick={() => handleVideoClick(videoId)}
                        >
                            <img
                                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                                alt={`YouTube Video ${videoId}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;