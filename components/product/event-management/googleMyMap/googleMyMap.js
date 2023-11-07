import React from 'react'

class GoogleMyMap extends React.Component {
  render() {
    const { embedURL } = this.props

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1zngZPiGhcwL4YeMqLoS8pnD17DEcoY0&ehbc=2E312F" width="640" height="480"></iframe>`,
        }}
      ></div>
    )
  }
}

export default GoogleMyMap
