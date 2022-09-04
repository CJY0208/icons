import React from 'react'

export default function PlaySkipForwardSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z" fill="currentColor"/></svg>
  )
}