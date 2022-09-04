import React from 'react'

export default function FootballSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm140.64 296.08h-46.77l-16.89-29l15-60.44L377.79 242l42.65 36.71a164.87 164.87 0 0 1-23.8 65.37zM134.21 242L164 254.67l15 60.44l-16.89 29h-46.75a164.87 164.87 0 0 1-23.8-65.34zm249.07-92.47l-18.41 52.33l-31.12 13.18L277 167.46v-35l43.86-29.22a166.87 166.87 0 0 1 62.42 46.32zM191.14 103.2L235 132.42v35l-56.75 47.61l-31.12-13.18l-18.41-52.33a166.87 166.87 0 0 1 62.42-46.32zm26.44 314.3l-20.1-50.66l16-27.51h85l16.06 27.53l-20 50.6a166.23 166.23 0 0 1-77 0z" fill="currentColor"/></svg>
  )
}