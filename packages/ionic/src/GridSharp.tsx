import React from 'react'

export default function GridSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M240 240H32V32h208z" fill="currentColor"/><path d="M480 240H272V32h208z" fill="currentColor"/><path d="M240 480H32V272h208z" fill="currentColor"/><path d="M480 480H272V272h208z" fill="currentColor"/></svg>
  )
}