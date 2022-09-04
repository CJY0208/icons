import React from 'react'

export default function Coffee({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M383.1 257.4c.6-5.4.9-10 .9-13.8 0-19.6-3.3-19.7-16-19.7h-75.5c7.3-12 11.5-24.4 11.5-37 0-37.9-57.3-56.4-57.3-88 0-11.7 5.1-21.3 9.3-34.9-26.5 7-47.4 33.5-47.4 61.6 0 48.3 56.3 48.7 56.3 84.8 0 4.5-1.4 8.5-2.1 13.5h-55.9c.8-3 1.3-6.2 1.3-9.3 0-22.8-39.1-33.9-39.1-52.8 0-7 1-12.8 3.2-21-12.9 5.1-28.3 20-28.3 36.8 0 26.7 31.9 29.3 36.8 46.3H80c-12.7 0-16 .1-16 19.7 0 19.6 7.7 61.3 28.3 111s44.4 71.6 61.2 86.2l.1-.2c5.1 4.6 11.8 7.3 19.2 7.3h102.4c7.4 0 14.1-2.7 19.2-7.3l.1.2c9-7.8 20-17.8 31.4-32.9 4.7 2 9.8 3.7 15.4 5 8.4 2 16.8 3 24.8 3 24 0 45.6-9.2 60.8-25.8 13.4-14.6 21.1-34.4 21.1-54.2 0-38.9-28-71.4-64.9-78.5zm-17 126.8c-8.6 0-15.6-1.2-22.1-4.2 4-8 7.9-15.9 11.7-25.1 10.1-24.4 17.1-47 21.6-65.8 22 4.3 38.7 23.8 38.7 47.1 0 22.7-17.2 48-49.9 48z" fill="currentColor"/></svg>
  )
}