import React from 'react'
import EventAsideContent from '@/components/share/product/event-management/EventAsideContent/EventAsideContent'

export default function LeftContentComponent({ type, subtitle, choice }) {
  return (
    <div className="left col-3 d-md-block d-none">
      <EventAsideContent type={type} subtitle={subtitle} choice={choice} />
    </div>
  )
}
