import React from 'react'

export default function DocumentAttach({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M460 240H320a48 48 0 0 1-48-48V52a4 4 0 0 0-4-4h-53.25a65.42 65.42 0 0 0-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0 0 40-40V80a16 16 0 0 0-32 0v152a7.75 7.75 0 0 1-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40c29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144a16 16 0 0 0-32 0v82.13c0 51.51 33.19 89.63 80 93.53V432a64 64 0 0 0 64 64h208a64 64 0 0 0 64-64V244a4 4 0 0 0-4-4z" fill="currentColor"/><path d="M320 208h129.81a2 2 0 0 0 1.41-3.41L307.41 60.78a2 2 0 0 0-3.41 1.41V192a16 16 0 0 0 16 16z" fill="currentColor"/></svg>
  )
}