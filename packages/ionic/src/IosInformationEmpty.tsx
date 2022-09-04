import React from 'react'

export default function IosInformationEmpty({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><circle cx="251.5" cy="172" r="20" fill="currentColor"/><path d="M272 344V216h-48v8h16v120h-16v8h64v-8z" fill="currentColor"/></svg>
  )
}