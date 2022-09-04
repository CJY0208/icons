import React from 'react'

export default function Disc({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 176a80 80 0 1 0 80 80a80.09 80.09 0 0 0-80-80zm0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"/><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM256 368a112 112 0 1 1 112-112a112.12 112.12 0 0 1-112 112z" fill="currentColor"/></svg>
  )
}