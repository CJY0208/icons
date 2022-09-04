import React from 'react'

export default function PlayBackCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256zm63.47 0L248 168v72.16l120-72.48v176.45l-120-72.32v71.44z" fill="currentColor"/></svg>
  )
}