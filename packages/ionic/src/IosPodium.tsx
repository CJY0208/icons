import React from 'react'

export default function IosPodium({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 199.9v208.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V199.9c0-4.4-3.5-7.9-7.9-7.9H71.9c-4.4 0-7.9 3.5-7.9 7.9z" fill="currentColor"/><path d="M199.9 96c-4.4 0-7.9 3.5-7.9 7.9V416h120.1c4.4 0 7.9-3.5 7.9-7.9V103.9c0-4.4-3.5-7.9-7.9-7.9H199.9z" fill="currentColor"/><path d="M440.1 256h-96.2c-4.4 0-7.9 3.5-7.9 7.9v144.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V263.9c0-4.4-3.5-7.9-7.9-7.9z" fill="currentColor"/></svg>
  )
}