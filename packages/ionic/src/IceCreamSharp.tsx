import React from 'react'

export default function IceCreamSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M359.72 112.37a104 104 0 0 0-207.44 0A80.12 80.12 0 0 0 80 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 0 1 1.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0 0 41-40v-47.84a2 2 0 0 1 2.72-1.86A83.47 83.47 0 0 0 256 268a63.18 63.18 0 0 0 42.24-16.59a2 2 0 0 1 2.74 0A74.63 74.63 0 0 0 352 272a80 80 0 0 0 7.72-159.63z" fill="currentColor"/><path d="M256 300v12a72.1 72.1 0 0 1-58.21 70.64L256 496l92.06-192.08a105.29 105.29 0 0 1-49.18-14.36A93.75 93.75 0 0 1 256 300z" fill="currentColor"/></svg>
  )
}