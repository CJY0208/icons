import React from 'react'

export default function FilmSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M480 80H32v352h448zM112 352v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm256 160H144v-32h224zm80 80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48z" fill="currentColor"/></svg>
  )
}