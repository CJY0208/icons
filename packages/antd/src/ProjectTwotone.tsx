import React from 'react'

export default function ProjectTwotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" fillOpacity=".8" fill="currentColor"/><path d="M184 840h656V184H184v656zm472-560c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280zm-192 0c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280zm-192 0c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280z" fillOpacity=".1" fill="currentColor"/><path d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8z" fillOpacity=".8" fill="currentColor"/></svg>
  )
}