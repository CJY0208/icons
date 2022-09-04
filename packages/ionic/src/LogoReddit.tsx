import React from 'react'

export default function LogoReddit({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M324 256a36 36 0 1 0 36 36a36 36 0 0 0-36-36z" fill="currentColor"/><circle cx="188" cy="292" r="36" transform="rotate(-22.5 187.997 291.992)" fill="currentColor"/><path d="M496 253.77c0-31.19-25.14-56.56-56-56.56a55.72 55.72 0 0 0-35.61 12.86c-35-23.77-80.78-38.32-129.65-41.27l22-79l66.41 13.2c1.9 26.48 24 47.49 50.65 47.49c28 0 50.78-23 50.78-51.21S441 48 413 48c-19.53 0-36.31 11.19-44.85 28.77l-90-17.89l-31.1 109.52l-4.63.13c-50.63 2.21-98.34 16.93-134.77 41.53A55.38 55.38 0 0 0 72 197.21c-30.89 0-56 25.37-56 56.56a56.43 56.43 0 0 0 28.11 49.06a98.65 98.65 0 0 0-.89 13.34c.11 39.74 22.49 77 63 105C146.36 448.77 199.51 464 256 464s109.76-15.23 149.83-42.89c40.53-28 62.85-65.27 62.85-105.06a109.32 109.32 0 0 0-.84-13.3A56.32 56.32 0 0 0 496 253.77zM414 75a24 24 0 1 1-24 24a24 24 0 0 1 24-24zM42.72 253.77a29.6 29.6 0 0 1 29.42-29.71a29 29 0 0 1 13.62 3.43c-15.5 14.41-26.93 30.41-34.07 47.68a30.23 30.23 0 0 1-8.97-21.4zM390.82 399c-35.74 24.59-83.6 38.14-134.77 38.14S157 423.61 121.29 399c-33-22.79-51.24-52.26-51.24-83A78.5 78.5 0 0 1 75 288.72c5.68-15.74 16.16-30.48 31.15-43.79a155.17 155.17 0 0 1 14.76-11.53l.3-.21l.24-.17c35.72-24.52 83.52-38 134.61-38s98.9 13.51 134.62 38l.23.17l.34.25A156.57 156.57 0 0 1 406 244.92c15 13.32 25.48 28.05 31.16 43.81a85.44 85.44 0 0 1 4.31 17.67a77.29 77.29 0 0 1 .6 9.65c-.01 30.72-18.21 60.19-51.25 82.95zm69.6-123.92c-7.13-17.28-18.56-33.29-34.07-47.72A29.09 29.09 0 0 1 440 224a29.59 29.59 0 0 1 29.41 29.71a30.07 30.07 0 0 1-8.99 21.39z" fill="currentColor"/><path d="M323.23 362.22c-.25.25-25.56 26.07-67.15 26.27c-42-.2-66.28-25.23-67.31-26.27a4.14 4.14 0 0 0-5.83 0l-13.7 13.47a4.15 4.15 0 0 0 0 5.89c3.4 3.4 34.7 34.23 86.78 34.45c51.94-.22 83.38-31.05 86.78-34.45a4.16 4.16 0 0 0 0-5.9l-13.71-13.47a4.13 4.13 0 0 0-5.81 0z" fill="currentColor"/></svg>
  )
}