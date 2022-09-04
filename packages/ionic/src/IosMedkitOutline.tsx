import React from 'react'

export default function IosMedkitOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M272 208v64h64v32h-64v64h-32v-64h-64v-32h64v-64h32m16-16h-64v64h-64v64h64v64h64v-64h64v-64h-64v-64z" fill="currentColor"/><path d="M336 128V96c-.5-18.2-13.6-32-32.2-32h-99.1C186.1 64 176 77.7 176 96v32H48v320h416V128H336zM192 98.1c0-10.2 2.9-18.1 13.7-18.1h97.1c10.4 0 17.2 7.7 17.2 18.1V128H192V98.1zM448 432H64V144h384v288z" fill="currentColor"/></svg>
  )
}