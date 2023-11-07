//aaa
import React, { useEffect, useState } from 'react'

//kkk props
export default function Tracklist(props) {
  //aaa kkk
  const [tracklist, setTracklist] = useState([]) // 初始化狀態為空數組

  // kkk
  useEffect(() => {
    if (props.id) {
      fetch(`http://localhost:3005/api/album/${props.id}/tracklist`)
        .then((response) => response.json())
        .then((data) => {
          setTracklist(data)
        })
        .catch((error) => {
          console.error('發生錯誤：', error)
        })
    }
  }, [props.id])

  // 原本
  // useEffect(() => {
  //   if (props.discogsId) {
  //     fetch(`https://api.discogs.com/releases/${props.discogsId}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const { tracklist } = data
  //         setTracklist(tracklist)
  //       })
  //       .catch((error) => {
  //         console.error('發生錯誤：', error)
  //       })
  //   }
  // }, [props.discogsId])

  return (
    <>
      <table className=" table-bordered text-black">
        <thead className="bg-warning">
          <tr className="text-center">
            <th className="ps-3 pe-3 pt-2 pb-2">曲目</th>
            <th className="ps-3 pe-3 pt-2 pb-2">曲名</th>
          </tr>
        </thead>
        <tbody className="bg-primary">
          {tracklist.map((track, index) => (
            <tr key={track.id} className="text-center">
              <td className="ps-3 pe-3 pt-2 pb-2">{index + 1}</td>
              <td className="ps-3 pe-3 pt-2 pb-2">{track.Track}</td>
            </tr>
          ))}
          {/* 原本 */}
          {/* {tracklist.map((track, index) => (
            <tr key={index} className="text-center">
              <td className="ps-3 pe-3 pt-2 pb-2">{track.position}</td>
              <td className="ps-3 pe-3 pt-2 pb-2">{track.title}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  )
}
