import React from 'react'

export default function Toggles2({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2c0-.729-.195-1.412-.535-2z"/><path d="M6 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8a4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/><path d="M14 4a4 4 0 1 1-8 0a4 4 0 0 1 8 0z"/></g></svg>
  )
}