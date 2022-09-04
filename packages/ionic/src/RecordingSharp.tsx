import React from 'react'

export default function RecordingSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M384 138a117.93 117.93 0 0 0-91.84 192h-72.32A118 118 0 1 0 128 374h256a118 118 0 0 0 0-236zM54 256a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74zm330 74a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74z" fill="currentColor"/></svg>
  )
}