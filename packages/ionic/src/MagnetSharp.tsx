import React from 'react'

export default function MagnetSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M191.98 463.58v-48" fill="currentColor"/><path stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M90.16 421.4l33.94-33.94" fill="currentColor"/><path stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M47.98 319.58h48" fill="currentColor"/><path d="M422.2 89.82a144 144 0 0 0-203.71-.07l-67.88 67.88l67.88 67.89l67.88-67.89a48 48 0 0 1 68.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32l67.88 67.88l66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55z" fill="currentColor"/><path d="M82.718 225.517l45.255-45.254l67.883 67.882L150.6 293.4z" fill="currentColor"/><path d="M218.49 361.27l45.254-45.254l67.882 67.882l-45.255 45.255z" fill="currentColor"/></svg>
  )
}