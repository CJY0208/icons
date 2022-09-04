import React from 'react'

export default function IosLightbulb({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M400 172.9C400 95.1 333.9 32 256 32S112 95.1 112 173c0 31 13.2 59 30.2 83h-.3c10.9 15 21.4 27.7 31.5 45 22 37.8 18.6 74.3 18.7 81.6v1.4h32V256l-32-64h16.6l31.4 64v128h32V256l31.4-64H320l-32 64v128h32v-1.4c0-8.9-3.6-43.8 18.4-81.6 10.1-17.3 20.6-30 31.5-45h-.1c17-24 30.2-52 30.2-83.1z" fill="currentColor"/><path d="M224 464h64v16h-64z" fill="currentColor"/><path d="M208 432h96v16h-96z" fill="currentColor"/><path d="M208 400h96v16h-96z" fill="currentColor"/></svg>
  )
}