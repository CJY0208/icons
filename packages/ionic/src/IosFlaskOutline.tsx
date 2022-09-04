import React from 'react'

export default function IosFlaskOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M436.912 370.441L320 175V48h16V32h-32v147.418l2.514 3.791 116.575 194.834c6.75 12.818 9.314 25.95 9.001 37.957-.243 9.339-1.958 17.938-6.545 25.569C417.076 455.666 402.33 464 384.981 464H129.093c-17.504 0-32.461-8.435-41.035-22.705-11.897-19.801-10.889-38.145 2.275-63.139L181.821 224H240v-16h-48.683l14.687-24.756L208 179.4V176h48v-16h-48v-32h32v-16h-32V80h48V64h-48V32h-32v16h16v127L76.126 370.441C67.714 386.268 63.615 401.814 64.027 416c1.061 36.511 28.702 64 65.065 64h255.889c36.291 0 62.131-27.598 62.992-64 .338-14.244-2.606-29.651-11.061-45.559z" fill="currentColor"/><path d="M108.292 374.616c-6.907 10.542-10.936 24.095-10.936 33.55 0 27.584 15.82 39.834 45.682 39.834H368.97c29.804 0 44.975-15.711 45.681-39.959.277-9.488-3.143-22.729-10.086-33.324L332.729 256H179.5l-71.208 118.616zM323.705 272l67.168 110.87.151.124.159.182c5.382 8.212 7.647 18.275 7.476 24.18-.229 7.839-2.477 13.98-6.683 17.795-4.774 4.328-12.729 6.85-23.008 6.85H143.037c-11.064 0-19.27-2.236-23.73-5.996-1.472-1.24-5.954-5.143-5.954-18.088 0-5.943 2.857-16.383 8.319-24.717l.177-.302.166-.042L188.564 272h135.141z" fill="currentColor"/></svg>
  )
}