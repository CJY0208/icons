import React from 'react'

export default function CompassTwotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372zM327.6 701.7c-2 .9-4.4 0-5.3-2.1c-.4-1-.4-2.2 0-3.2L421 470.9L553.1 603l-225.5 98.7zm375.1-375.1L604 552.1L471.9 420l225.5-98.7c2-.9 4.4 0 5.3 2.1c.4 1 .4 2.1 0 3.2z" fillOpacity=".1" fill="currentColor"/><path d="M322.3 696.4c-.4 1-.4 2.2 0 3.2c.9 2.1 3.3 3 5.3 2.1L553.1 603L421 470.9l-98.7 225.5zm375.1-375.1L471.9 420L604 552.1l98.7-225.5c.4-1.1.4-2.2 0-3.2c-.9-2.1-3.3-3-5.3-2.1z" fillOpacity=".8" fill="currentColor"/><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fillOpacity=".8" fill="currentColor"/></svg>
  )
}