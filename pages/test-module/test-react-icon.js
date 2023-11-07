import { FaBeer } from 'react-icons/fa'
import { AiFillApple, AiFillAudio } from 'react-icons/ai'
class Question extends React.Component {
  render() {
    return (
      <h3>
        {' '}
        Lets go for a <FaBeer />?{' '}
      </h3>
    )
  }
}
import React from 'react'

export default function TestReactIcon() {
  return (
    <>
      <Question />
      <FaBeer />
      <AiFillApple />
      <AiFillAudio />
    </>
  )
}
