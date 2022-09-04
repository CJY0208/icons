import React from 'react'

export default function Tshirt({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M480 96L320 48c-13.988 27.227-30.771 40.223-63.769 40.223C223.723 87.676 205.722 75 192 48L32 96l32 88 64-8-16 288h288l-16-288 64 8 32-88z" fill="currentColor"/></svg>
  )
}