import React from "react";
import PropTypes from 'prop-types'

function YoutubeVideo({videoId, videoName, videoLength, VideoDescription, videoAuthor, children}) {
    return(
        <div id={videoId}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <h3>author - {videoAuthor}</h3>
            <p>{VideoDescription}</p>
            {children}
        </div>
    )
}
export default YoutubeVideo


YoutubeVideo.propTypes = {
    videoId: PropTypes.string,
    videoName: PropTypes.string,
    videoLength: PropTypes.string,
    VideoDescription: PropTypes.string
}

YoutubeVideo.defaultProps = {
    videoAuthor: "sunrise"
}