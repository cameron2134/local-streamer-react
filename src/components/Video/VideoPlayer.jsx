import React, { Component } from 'react';

class VideoPlayer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            videoID: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("state updating: " + nextProps.videoID);
        this.setState({ videoID: nextProps.videoID });  
      }

    render() {
        return (
            <div>
                <video width="1080" height="720" controls src={"https://localhost:44362/api/Video/" + this.state.videoID + "/Stream"} type="video/mp4">
                    {/* <source  />  */}
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}

export default VideoPlayer;