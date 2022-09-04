import React from 'react'

export default function SubwaySharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M392 16H120a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24zM208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 208 64zm-28.53 287.82a32 32 0 1 1 28.35-28.35a32 32 0 0 1-28.35 28.35zm160 0a32 32 0 1 1 28.35-28.35a32 32 0 0 1-28.35 28.35zM384 144v64H128v-64z" fill="currentColor"/><path d="M298 416l31.37 32H182.63L214 416h-44l-80.57 80h45.2l16-16h210.74l16 16h45.3L343 416h-45z" fill="currentColor"/></svg>
  )
}