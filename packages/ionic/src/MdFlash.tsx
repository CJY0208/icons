import React from 'react'

export default function MdFlash({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M160 48v224h64v192l128-256h-64l64-160H160z" fill="currentColor"/></svg>
  )
}