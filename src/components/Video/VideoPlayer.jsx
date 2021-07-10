import React, { Component, useEffect, useState } from 'react';

function VideoPlayer(props) {
    const [videoID, setVideoID] = useState(0);

    useEffect(() => {
        setVideoID(props.videoID);
    });

    return (
        <div>
            <video width="1080" height="720" controls src={"https://localhost:44362/api/Video/" + videoID + "/Stream"} type="video/mp4">
                {/* <source  />  */}
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;