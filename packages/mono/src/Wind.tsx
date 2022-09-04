import React from 'react'

export default function Wind({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M18.806 12.919a4 4 0 1 0-3.787-6.586a1 1 0 0 0 1.49 1.334a1.992 1.992 0 0 1 1.695-.657A2 2 0 0 1 18 11H3a1 1 0 1 0 0 2h15c.276 0 .546-.028.806-.081zM5 10h5.516a2.5 2.5 0 1 0-1.88-4.167a1 1 0 0 0 1.491 1.334A.5.5 0 1 1 10.5 8H5a1 1 0 0 0 0 2zm11.5 4H8a1 1 0 1 0 0 2h8.5a.5.5 0 1 1-.373.833a1 1 0 1 0-1.49 1.334A2.5 2.5 0 1 0 16.517 14H16.5z" fill="currentColor"/></g></svg>
  )
}