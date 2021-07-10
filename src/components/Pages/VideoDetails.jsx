import React, { useState, useEffect } from 'react';
import VideoPlayer from "../Video/VideoPlayer";

function VideoDetails(props) {
    const [videoID, setVideoID] = useState(props.id);
    const [video, setVideo] = useState({});

    useEffect(() => {
        const url = "https://localhost:44362/api/Video/" + props.id;
        
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            setVideo(json);
        });
    });

    return (
        <div>
            <h1>{video.title}</h1>
            <VideoPlayer videoID={video.id} />

            <h3>Description</h3>

            <p>{video.description}</p>

            <h3>Tags</h3>
            <p>{video.tags && video.tags.join(", ")}</p>
            
        </div>
    );
}

export default VideoDetails;