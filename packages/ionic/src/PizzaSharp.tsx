import React from 'react'

export default function PizzaSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M442.3 67.82C383.92 44.72 317.78 32 256 32c-63.57 0-129.8 12.51-186.56 35.25C49.18 75.48 42 80 42 80l22 44l37.53-16.14C147.58 89.53 199.19 80 256.51 80c57.49 0 108.09 9.23 154.75 28.25L448 124l22-44s-7-4-27.7-12.18z" fill="currentColor"/><ellipse cx="320.48" cy="207.99" rx="31.97" ry="32.03" transform="rotate(-44.98 320.503 207.996)" fill="none"/><ellipse cx="192.48" cy="191.99" rx="31.97" ry="32.03" transform="rotate(-44.98 192.49 191.992)" fill="none"/><ellipse cx="256.48" cy="319.99" rx="31.97" ry="32.03" transform="rotate(-44.98 256.505 320)" fill="none"/><path d="M409.66 140.85C364.15 122.52 308.16 112 256 112a425 425 0 0 0-153.7 28.9c-.25.1-9.24 4.23-19 8.71c7.46 16.22 18 39.16 22.2 48.33L256 480l173.74-330.84l-19.92-8.24zm-185.25 53.22a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34zm64 128a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34zm64-112a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34z" fill="currentColor"/></svg>
  )
}