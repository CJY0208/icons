import React from 'react'

export default function MegaphoneSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M128 144v332a4 4 0 0 0 4 4h100.07a8 8 0 0 0 7.82-9.7L208.71 352H232a8 8 0 0 0 8-8V144z" fill="currentColor"/><path d="M452.18 186.55L448 185.5V36a4 4 0 0 0-4-4h-42.5a4 4 0 0 0-2.63 1L272 144v160l126.87 111a4 4 0 0 0 2.63 1H444a4 4 0 0 0 4-4V262.5l4.18-1.05C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45z" fill="currentColor"/><path d="M96 144H52a4 4 0 0 0-4 4v35.59a43 43 0 0 0-4.24 4.35C38.4 194.32 32 205.74 32 224c0 20.19 7.89 33.13 16 40.42V300a4 4 0 0 0 4 4h44z" fill="currentColor"/></svg>
  )
}