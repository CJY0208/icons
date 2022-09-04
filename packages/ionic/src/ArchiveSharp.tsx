import React from 'react'

export default function ArchiveSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><rect x="32" y="48" width="448" height="80" rx="12" ry="12" fill="currentColor"/><path d="M64 160v280a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24V160zm192 230.63L169.32 304L192 281.32l48 48.05V208h32v121.37l48.07-48.07l22.61 22.64z" fill="currentColor"/></svg>
  )
}