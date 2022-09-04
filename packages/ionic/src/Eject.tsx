import React from 'react'

export default function Eject({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M399 320c10 0 16.8-7.1 16.8-15.9 0-3.3-1.1-6.1-2.8-9L275.3 104.7c-4.6-5.3-11.5-8.7-19.3-8.7-7.7 0-14.6 3.4-19.2 8.7l-138 190.8c-1.7 2.6-2.6 5.5-2.6 8.7 0 8.7 6.8 15.8 16.8 15.8h286z" fill="currentColor"/><path d="M403.7 352H108.4c-6.8 0-12.4 5.4-12.4 12.2v39.6c0 6.7 5.5 12.2 12.4 12.2h295.3c6.8 0 12.3-5.5 12.3-12.2v-39.6c0-6.8-5.5-12.2-12.3-12.2z" fill="currentColor"/></svg>
  )
}