import React from 'react'

export default function Keypad({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 400a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M256 272a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M256 144a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M256 16a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M384 272a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M384 144a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M384 16a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M128 272a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M128 144a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/><path d="M128 16a48 48 0 1 0 48 48a48 48 0 0 0-48-48z" fill="currentColor"/></svg>
  )
}