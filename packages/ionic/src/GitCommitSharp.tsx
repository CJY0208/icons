import React from 'react'

export default function GitCommitSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M480 224H380a128 128 0 0 0-247.9 0H32v64h100.05A128 128 0 0 0 380 288h100zm-224 96a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64z" fill="currentColor"/></svg>
  )
}