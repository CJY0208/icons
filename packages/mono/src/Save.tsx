import React from 'react'

export default function Save({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M3 5a2 2 0 0 1 2-2h11.586A2 2 0 0 1 18 3.586l2.707 2.707A1 1 0 0 1 21 7v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm6 14h6v-6H9v6zm8 0h2V7.414l-2-2V7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5H5v14h2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6zM9 5v2h6V5H9z" fill="currentColor"/></g></svg>
  )
}