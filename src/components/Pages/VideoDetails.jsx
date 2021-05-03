import React, { Component } from 'react';
import VideoPlayer from "../Video/VideoPlayer";

class VideoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            video: {}
        }
    }

    componentDidMount() {
        const url = "https://localhost:44362/api/Video/" + this.props.id;
        fetch(url)
        .then(resp => resp.json())
        .then(json => this.setState({ video: json }))
      }

    render() {
        // const {video} = this.state;

        return (
            <div>
                <h1>{this.state.video.title}</h1>
                <VideoPlayer videoID={this.state.video.id} />

                <h3>Description</h3>

                <p>{this.state.video.description}</p>

                <h3>Tags</h3>
                <p>{this.state.video.tags && this.state.video.tags.join(", ")}</p>
                
            </div>
        );
    }
}

export default VideoDetails;