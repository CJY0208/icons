import React from 'react'

export default function WarningSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M479 447.77L268.43 56.64a8 8 0 0 0-14.09 0L43.73 447.77a8 8 0 0 0 7.05 11.79H472a8 8 0 0 0 7-11.79zm-197.62-36.29h-40v-40h40zm-4-63.92h-32l-6-160h44z" fill="currentColor"/></svg>
  )
}