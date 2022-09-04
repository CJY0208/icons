import React from 'react'

export default function SocialYenOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M448 32h-80L256 253.128 144 32H64l112.368 208H128v48h73.564L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.891-31H384v-48h-48.289L448 32zm-80 224v16h-67l-21 43v37h88v16h-88v96h-48v-96h-88v-16h88v-35.75L212 272h-68v-16h59.197l-12.752-23.605L90.829 48H134l122 240L378 48h43.18l-99.548 184.399L308.891 256H368z" fill="currentColor"/></svg>
  )
}