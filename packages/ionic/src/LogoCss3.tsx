import React from 'react'

export default function LogoCss3({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 32l35 403.22L255.77 480L413 435.15L448 32zm290.68 334.9L256.07 395l-98.46-28.24l-6.75-77.76h48.26l3.43 39.56l53.59 15.16l.13.28l53.47-14.85l5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z" fill="currentColor"/></svg>
  )
}