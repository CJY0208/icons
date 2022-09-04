import React from 'react'

export default function Merge({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M384 224c-23.637 0-44.307 12.89-55.391 32H319c-42.464 0-79.99-17.904-111.535-53.214-20.356-22.787-33.493-48.869-37.856-58.218C183.301 132.822 192 115.413 192 96c0-35.29-28.71-64-64-64S64 60.71 64 96c0 23.637 12.89 44.307 32 55.391V360.61C76.89 371.693 64 392.363 64 416c0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391V245.692C203.553 294.307 258.468 320 319 320h9.609c11.084 19.11 31.754 32 55.391 32 35.29 0 64-28.71 64-64s-28.71-64-64-64zM128 64c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zm0 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm256-128c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"/></svg>
  )
}