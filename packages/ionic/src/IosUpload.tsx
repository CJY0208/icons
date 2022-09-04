import React from 'react'

export default function IosUpload({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M264 144v162h-16V144H96v304h320V144z" fill="currentColor"/><path d="M264 63.4l54.8 54.7 11.6-11.6L256 32l-74.5 74.5 11.7 11.6L248 63.4V144h16z" fill="currentColor"/></svg>
  )
}