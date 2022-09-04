import React from 'react'

export default function ArrowShrink({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M448 92.3l-81.9 81.8L416 224H288V96l49.9 49.9L419.7 64z" fill="currentColor"/><path d="M448 419.7l-81.9-81.8L416 288H288v128l49.9-49.9 81.8 81.9z" fill="currentColor"/><path d="M64 419.7l81.9-81.8L96 288h128v128l-49.9-49.9L92.3 448z" fill="currentColor"/><path d="M64 92.3l81.9 81.8L96 224h128V96l-49.9 49.9L92.3 64z" fill="currentColor"/></svg>
  )
}