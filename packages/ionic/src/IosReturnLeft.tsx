import React from 'react'

export default function IosReturnLeft({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M70.5 265.4l59.6-59.4c2.6-2.6 6.1-4.1 9.9-4.1 3.7 0 7.3 1.4 9.9 4.1 2.6 2.6 4.1 6.1 4.1 9.9s-1.5 7.3-4.1 9.9l-.1.1-41.1 40.1H370c13.2 0 25.8-5.2 35.3-14.7 9.5-9.4 14.7-21.9 14.7-35.3v-48c0-7.7 6.3-14 14-14s14 6.3 14 14v48c0 20.8-8.1 40.3-22.9 55.1-14.8 14.8-34.3 22.9-55.1 22.9H108.3l39.6 40.2c2.6 2.6 4.1 6.1 4.1 9.9 0 3.7-1.4 7.3-4.1 9.9l-.1.1c-2.7 2.5-6.2 3.9-9.8 3.9-3.9 0-7.3-1.4-9.9-4.1l-57.6-57.4c-4.2-4.2-6.5-9.8-6.5-15.7 0-5.8 2.3-11.3 6.5-15.4z" fill="currentColor"/></svg>
  )
}