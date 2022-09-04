import React from 'react'

export default function DesktopSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M480 48H32a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm-20 36v216H52V84zM240.13 354.08a16 16 0 1 1 13.79 13.79a16 16 0 0 1-13.79-13.79z" fill="currentColor"/></svg>
  )
}