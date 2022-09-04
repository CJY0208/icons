import React from 'react'

export default function Pc({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H5zm.5 14a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1zm2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1zM5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM5.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/></g></svg>
  )
}