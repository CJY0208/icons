import React from 'react'

export default function EditAlt({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M16.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-9 9A1 1 0 0 1 11 17H8a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707l9-9zM9 13.414V15h1.586l8-8L17 5.414l-8 8zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="currentColor"/></g></svg>
  )
}