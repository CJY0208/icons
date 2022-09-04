import React from 'react'

export default function QrCodeSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M336 336h80v80h-80z" fill="currentColor"/><path d="M272 272h64v64h-64z" fill="currentColor"/><path d="M416 416h64v64h-64z" fill="currentColor"/><path d="M432 272h48v48h-48z" fill="currentColor"/><path d="M272 432h48v48h-48z" fill="currentColor"/><path d="M336 96h80v80h-80z" fill="currentColor"/><path d="M480 240H272V32h208zm-164-44h120V76H316z" fill="currentColor"/><path d="M96 96h80v80H96z" fill="currentColor"/><path d="M240 240H32V32h208zM76 196h120V76H76z" fill="currentColor"/><path d="M96 336h80v80H96z" fill="currentColor"/><path d="M240 480H32V272h208zM76 436h120V316H76z" fill="currentColor"/></svg>
  )
}