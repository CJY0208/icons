import React from 'react'

export default function ListSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="48" d="M144 144h320"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="48" d="M144 256h320"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="48" d="M144 368h320"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M64 128h32v32H64z"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M64 240h32v32H64z"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M64 352h32v32H64z"/></svg>
  )
}