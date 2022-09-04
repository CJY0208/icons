import React from 'react'

export default function ColorWandSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M133.441 200.647l67.197-67.196l78.142 78.142l-67.196 67.196z" fill="currentColor"/><path d="M301.41 234.21l-67.19 67.2L412 480l68-68l-178.59-177.79z" fill="currentColor"/><path d="M32 176h80v32H32z" fill="currentColor"/><path d="M67.624 90.25l22.627-22.628l56.569 56.569l-22.627 22.627z" fill="currentColor"/><path d="M176 32h32v80h-32z" fill="currentColor"/><path d="M237.32 124.195l56.569-56.569l22.627 22.627l-56.569 56.569z" fill="currentColor"/><path d="M67.62 293.887l56.569-56.569l22.627 22.627l-56.569 56.569z" fill="currentColor"/></svg>
  )
}