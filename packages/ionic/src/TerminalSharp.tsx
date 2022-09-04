import React from 'react'

export default function TerminalSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M16 44v424a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H28a12 12 0 0 0-12 12zm57.51 193.5l76.88-61.5l-76.88-61.5l20-25l108.1 86.5L93.5 262.49zM272 256h-96v-32h96z" fill="currentColor"/></svg>
  )
}