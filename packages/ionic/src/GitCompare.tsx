import React from 'react'

export default function GitCompare({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M218.31 340.69A16 16 0 0 0 191 352v32h-20a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h20v32a16 16 0 0 0 27.31 11.31l64-64a16 16 0 0 0 0-22.62zM112 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32z" fill="currentColor"/><path d="M432 360.61V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 320 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0zM400 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"/></svg>
  )
}