import React from 'react'

export default function LogoMicrosoft({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M31.87 30.58H244.7v212.81H31.87z" fill="currentColor"/><path d="M266.89 30.58H479.7v212.81H266.89z" fill="currentColor"/><path d="M31.87 265.61H244.7v212.8H31.87z" fill="currentColor"/><path d="M266.89 265.61H479.7v212.8H266.89z" fill="currentColor"/></svg>
  )
}