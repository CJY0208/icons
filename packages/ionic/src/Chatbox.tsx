import React from 'react'

export default function Chatbox({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M144 464a16 16 0 0 1-16-16v-64h-24a72.08 72.08 0 0 1-72-72V120a72.08 72.08 0 0 1 72-72h304a72.08 72.08 0 0 1 72 72v192a72.08 72.08 0 0 1-72 72H245.74l-91.49 76.29A16.05 16.05 0 0 1 144 464z" fill="currentColor"/></svg>
  )
}