import React from 'react'

export default function MdPause({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z" fill="currentColor"/></svg>
  )
}