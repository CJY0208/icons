import React from 'react'

export default function LogInSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M432 80H192a16 16 0 0 0-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 0 1 0 22.62L288 358.63L265.37 336l64-64H176v144a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16z" fill="currentColor"/><path d="M64 240h112v32H64z" fill="currentColor"/></svg>
  )
}