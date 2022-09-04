import React from 'react'

export default function DiceSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 366.92L240 480V284L48 170zM192 288c8.84 0 16 10.75 16 24s-7.16 24-16 24s-16-10.75-16-24s7.16-24 16-24zm-96 32c8.84 0 16 10.75 16 24s-7.16 24-16 24s-16-10.75-16-24s7.16-24 16-24z" fill="currentColor"/><path d="M272 284v196l192-113.08V170zm48 140c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24zm32 77.64z" fill="currentColor"/><path d="M256 32L64 144l192 112l192-112zm0 120c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16z" fill="currentColor"/></svg>
  )
}