import React from "react";

function VideoThumbnail(props) {
    const url = "https://localhost:44362/api/Video/" + props.id + "/Thumbnail";

    return (
        <div>
            <h3>{props.videoTitle}</h3>
            <img class="img-thumbnail" src={url} alt="test"></img>
        </div>
    );
}

export default VideoThumbnail;