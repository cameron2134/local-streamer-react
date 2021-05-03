import React from "react";

function VideoThumbnail(props) {
    return (
        <div>
            <h3>{props.videoTitle}</h3>
            <img class="img-thumbnail" src="http://placehold.it/250x250" alt="test"></img>
        </div>
    );
}

export default VideoThumbnail;