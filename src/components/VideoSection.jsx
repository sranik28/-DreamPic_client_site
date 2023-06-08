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
        <div className="max-w-[1240px] mx-auto mb-20">
            <h1 className="my-10 text-3xl font-bold text-center">
                Videos From Our Blog
            </h1>
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