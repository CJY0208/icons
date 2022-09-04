import React from 'react'

export default function Webcam({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a6.785 6.785 0 0 0 .907.57l.014.006l.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002l.014-.007a4.473 4.473 0 0 0 .268-.148a6.75 6.75 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2V6zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2z"/><path d="M8 6.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm7 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0z"/></g></svg>
  )
}