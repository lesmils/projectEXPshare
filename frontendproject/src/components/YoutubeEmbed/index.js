import React from "react";

function YoutubeEmbed({ streamUrl }) {
  return (
    <div className="video-responsive">
      {!streamUrl ? (
        "loading"
      ) : (
        <iframe
          Width="60%"
          minWidth="400"
          height="550"
          src={streamUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      )}
    </div>
  );
}

export default YoutubeEmbed;
