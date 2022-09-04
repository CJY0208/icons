import React from 'react'

export default function IosPlusOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7S150.9 65.3 256 65.3 446.7 150.9 446.7 256 361.1 446.7 256 446.7z" fill="currentColor"/><path d="M264.1 128h-16.8v119.9H128v16.8h119.3V384h16.8V264.7H384v-16.8H264.1z" fill="currentColor"/></svg>
  )
}