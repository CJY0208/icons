import React from 'react'

export default function Italic({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M14.021 4H19a1 1 0 1 1 0 2h-4.246l-3.428 12H15a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h4.246l3.428-12H9a1 1 0 0 1 0-2h5.021z" fill="currentColor"/></g></svg>
  )
}