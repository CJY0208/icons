import React from 'react'

export default function ReplyAll({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M304.5 192v-80L152.7 255.8 304.5 390v-91.9c68 0 107.9 8.9 159.1 101.9 0 0-6.1-208-159.1-208z" fill="currentColor"/><path d="M47.5 256l144 126.5V324l-82.2-68 82.2-78.6v-57z" fill="currentColor"/></svg>
  )
}