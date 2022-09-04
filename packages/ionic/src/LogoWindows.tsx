import React from 'react'

export default function LogoWindows({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M480 265H232v179l248 36V265z" fill="currentColor"/><path d="M216 265H32v150l184 26.7V265z" fill="currentColor"/><path d="M480 32L232 67.4V249h248V32z" fill="currentColor"/><path d="M216 69.7L32 96v153h184V69.7z" fill="currentColor"/></svg>
  )
}