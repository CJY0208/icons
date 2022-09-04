import React from 'react'

export default function MdFlashOff({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M459.9 435.5L76.1 52.5 51.9 76.6 160 184.3V272h64v192l72-144 139.9 139.5z" fill="currentColor"/><path d="M352 208h-64l64-160H160v40.3l168 167.6z" fill="currentColor"/></svg>
  )
}