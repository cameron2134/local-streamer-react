import React from "react";

import VideoThumbnail from "../Video/VideoThumbnail";

function GridItem(props) {
    return (
        <div class="col">
        <VideoThumbnail videoTitle={props.videoTitle} id={props.id} />
        </div>
    );
}

export default GridItem;