import React, { useEffect, useState } from 'react'
import { VerticalTimeline as VerticalTimelineComponent, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function VerticalTimeline({ stories }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width } = window
      setScreenWidth(width)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  if (stories.length === 0)
    return null

  return (
    <VerticalTimelineComponent>
      {
        stories.map(story => {
          return (
            <VerticalTimelineElement
              key={story.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date={story.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize: 20, textAlign: 'center' }}
              icon={<i className={story.icon} style={{ marginTop: screenWidth < 1170 ? 2 : 17 }} />}
            >
              <h3 className="vertical-timeline-element-title">{story.companyName}</h3>
              <h4 className="vertical-timeline-element-subtitle">{story.companyAddress}</h4>
              <p>
                {story.description}
              </p>
            </VerticalTimelineElement>
          )
        })
      }
    </VerticalTimelineComponent>
  )
}