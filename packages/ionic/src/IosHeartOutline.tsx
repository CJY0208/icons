import React from 'react'

export default function IosHeartOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M359.385 80C319.966 80 277.171 97.599 256 132.8 234.83 97.599 192.034 80 152.615 80 83.647 80 32 123.238 32 195.779c0 31.288 12.562 71.924 40.923 105.657 28.359 33.735 45.229 51.7 100.153 88C228 425.738 256 432 256 432s28-6.262 82.924-42.564c54.923-36.3 71.794-54.265 100.153-88C467.438 267.703 480 227.067 480 195.779 480 123.238 428.353 80 359.385 80zm67.445 211.141c-26.852 31.94-42.18 48.895-96.729 84.947-40.237 26.596-65.252 36.301-74.102 39.233-8.85-2.933-33.864-12.639-74.102-39.233-54.548-36.052-69.876-53.006-96.729-84.948-12.065-14.351-21.857-31.274-28.316-48.943C51.062 226.355 48 210.304 48 195.779c0-30.284 10.131-55.643 29.297-73.335 9.14-8.437 20.158-14.992 32.752-19.484 12.945-4.619 27.266-6.96 42.566-6.96 38.018 0 73.217 17.682 89.674 45.046L256 163.844l13.711-22.798C286.169 113.682 321.368 96 359.385 96c15.3 0 29.621 2.341 42.566 6.959 12.594 4.493 23.612 11.048 32.752 19.484C453.869 140.136 464 165.495 464 195.779c0 14.525-3.062 30.576-8.854 46.418-6.458 17.668-16.25 34.592-28.316 48.944z" fill="currentColor"/></svg>
  )
}