import React, { Component } from 'react';

import GridItem from "../Grid/GridItem";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            videos: []
        }
    }

    componentDidMount() {
        const url = "https://localhost:44362/api/Video";
        fetch(url)
        .then(resp => resp.json())
        .then(json => this.setState({ videos: json }))
      }

    render() {
        const {videos} = this.state;

        return (
            <div>
                <h1 id="videoTitleHeader">Your Videos</h1>

                <div class="row row-cols-4 justify-content-center">

                    {
                        videos.map(
                            (video) => 
                            (
                                <Link to={"/videodetails/" + video.id}>
                                <GridItem videoTitle={video.title}>
                                    
                                </GridItem>
                                </Link>
                                

                            )
                        )
                    }
                </div>
            </div>
        );
}

}

export default Home;