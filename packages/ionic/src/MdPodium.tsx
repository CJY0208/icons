import React from 'react'

export default function MdPodium({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M32 224h128v192H32z" fill="currentColor"/><path d="M192 128h128v288H192z" fill="currentColor"/><path d="M352 288h128v128H352z" fill="currentColor"/></svg>
  )
}