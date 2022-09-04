import React from 'react'

export default function MailSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M464 80H48a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM265.82 284.63a16 16 0 0 1-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18l19.64 25.26z" fill="currentColor"/></svg>
  )
}