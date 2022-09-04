import React from 'react'

export default function BookTwotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312L572 347.4V136zM232 888V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9l81.4 59.4c2.7 2 6 3.1 9.4 3.1c8.8 0 16-7.2 16-16V136h64v752H232z" fillOpacity=".8" fill="currentColor"/><path d="M668 345.9V136h-96v211.4l49.5-35.4z" fillOpacity=".1" fill="currentColor"/><path d="M727.9 136v296.5c0 8.8-7.2 16-16 16c-3.4 0-6.7-1.1-9.4-3.1L621.1 386l-83.8 59.9a15.9 15.9 0 0 1-22.3-3.7c-2-2.7-3-6-3-9.3V136H232v752h559.9V136h-64z" fillOpacity=".1" fill="currentColor"/></svg>
  )
}