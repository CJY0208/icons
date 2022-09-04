import React from 'react'

export default function BedSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M432 224V96a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v128a48 48 0 0 0-48 48v160h36v-32h376v32h36V272a48 48 0 0 0-48-48zm-192 0H120v-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16zm32-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16v32H272z" fill="currentColor"/></svg>
  )
}