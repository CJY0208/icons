import React from 'react'

export default function Tennisball({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M448 256a192.55 192.55 0 0 0 32-2.68A224 224 0 0 0 258.68 32A192.55 192.55 0 0 0 256 64c0 105.87 86.13 192 192 192z" fill="currentColor"/><path d="M253.35 480c.94-5.67 1.65-11.4 2.09-17.18c.37-4.88.56-9.86.56-14.79c0-105.87-86.13-192-192-192a192.55 192.55 0 0 0-32 2.68A224 224 0 0 0 253.35 480z" fill="currentColor"/><path d="M289.61 222.39A222.53 222.53 0 0 1 224 64a226.07 226.07 0 0 1 2-30A224.1 224.1 0 0 0 34 226a226.07 226.07 0 0 1 30-2a222.53 222.53 0 0 1 158.39 65.61A222.53 222.53 0 0 1 288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 0 0 478 286a226.07 226.07 0 0 1-30 2a222.53 222.53 0 0 1-158.39-65.61z" fill="currentColor"/></svg>
  )
}