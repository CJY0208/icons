import React from 'react'

export default function IosPricetagsOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M448 64V32H288L32 320l160 160 23.471-23.904L240 480l240-272V64h-32zM192 457.371L54.39 320 294.621 48H432v137.377l-216.555 247.99-11.34 11.363L192 457.371zm272-255.994L240 457.371l-13.182-12.65L448 192V80h16v121.377z" fill="currentColor"/><path d="M352 160c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-48c8.836 0 16 7.163 16 16s-7.164 16-16 16-16-7.163-16-16 7.164-16 16-16z" fill="currentColor"/></svg>
  )
}