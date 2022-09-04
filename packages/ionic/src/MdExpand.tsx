import React from 'react'

export default function MdExpand({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M396.795 396.8H320V448h128V320h-51.205z" fill="currentColor"/><path d="M396.8 115.205V192H448V64H320v51.205z" fill="currentColor"/><path d="M115.205 115.2H192V64H64v128h51.205z" fill="currentColor"/><path d="M115.2 396.795V320H64v128h128v-51.205z" fill="currentColor"/></svg>
  )
}