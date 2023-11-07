import React from 'react'

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <iframe
        // autoPlay
        // muted
        // loop
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/_87ormGxRUQ?autoplay=1&controls=0&mute=1&loop=1&playlist=_87ormGxRUQ"
        title="畢業專題用＿BannerVideo"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowFullScreen
      ></iframe>

      {/* <iframe
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/_87ormGxRUQ?autoplay=1&mute=1&loop=1&playlist=_87ormGxRUQ"
        title="畢業專題用＿BannerVideo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}

      <style jsx>{`
        .video-banner {
          height: calc(100vh - 150px);
        }

         {
          /* .video-banner {
          position: relative;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
        }

        iframe {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: none;
        } */
        }
      `}</style>
    </div>
  )
}

export default VideoBanner
