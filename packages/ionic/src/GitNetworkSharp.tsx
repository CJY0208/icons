import React from 'react'

export default function GitNetworkSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M384 32a64 64 0 0 0-57.67 91.73l-70.83 80.82l-70.19-80.1A64 64 0 1 0 128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1 0 64 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 0 0 0-128zM96 96a32 32 0 1 1 32 32a32 32 0 0 1-32-32zm160 352a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm128-320a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"/></svg>
  )
}