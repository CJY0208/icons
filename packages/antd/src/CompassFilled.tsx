import React from 'react'

export default function CompassFilled({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zM327.3 702.4c-2 .9-4.4 0-5.3-2.1c-.4-1-.4-2.2 0-3.2l98.7-225.5l132.1 132.1l-225.5 98.7zm375.1-375.1l-98.7 225.5l-132.1-132.1L697.1 322c2-.9 4.4 0 5.3 2.1c.4 1 .4 2.1 0 3.2z" fill="currentColor"/></svg>
  )
}