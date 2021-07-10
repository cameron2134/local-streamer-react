import React, { useEffect, useState } from 'react';

import GridItem from "../Grid/GridItem";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


function Home()  {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const url = "https://localhost:44362/api/Video";
        
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            setVideos(json);
        });
    });

    return (
        <div>
            <h1 id="videoTitleHeader">Your Videos</h1>

            <div class="row row-cols-4 justify-content-center">
                {
                    videos.map(
                        (video) => 
                        (
                            <Link to={"/videodetails/" + video.id}>
                                <GridItem videoTitle={video.title} id={video.id} />
                            </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Home;