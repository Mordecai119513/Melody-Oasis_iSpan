import React, { useState } from 'react'
import { BiPlayCircle, BiPauseCircle } from 'react-icons/bi'
import ReactPlayer from 'react-player'
// import ReactAudioPlayer from 'react-audio-player'

export default function Audition({ audioUrl }) {
  const [playstate, setPlaystate] = useState(false)
  const [key, setKey] = useState(Date.now()) // 初始化一个随机的 key

  const changePlayState = () => {
    setPlaystate(!playstate)
  }

  const handleEnd = () => {
    setPlaystate(false)
    setKey(Date.now()) // 更新 key 来重新加载 ReactPlayer
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="h1">
          {playstate ? (
            <BiPauseCircle onClick={handleEnd} />
          ) : (
            <BiPlayCircle onClick={changePlayState} />
          )}
        </div>
      </div>

      <div>
        <ReactPlayer
          key={key}
          playing={playstate}
          url={`/ranking/${audioUrl}.mp3`}
          height={0}
          width={0}
          onEnded={handleEnd}
        />
      </div>
    </>
  )
}
