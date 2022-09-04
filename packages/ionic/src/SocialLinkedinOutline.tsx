import React from 'react'

export default function SocialLinkedinOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M182.8 384V212.9h-54.9V384h54.9zm-25.4-197c18.3 0 29.7-13.1 29.7-29.5-.3-16.7-11.4-29.5-29.4-29.5S128 140.8 128 157.5c0 16.4 11.4 29.5 29 29.5h.4z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"/><path d="M320.6 209c-29.1 0-41.6 16.4-49.6 27.8V213h-55v171h55v-97.4c0-5 .4-10 1.9-13.5 4-10 13-20.3 28.2-20.3 19.9 0 27.9 15.3 27.9 37.7V384h55v-99.9c0-51.3-27.2-75.1-63.4-75.1z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"/><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM414 416H99.1c-1.8 0-3.1-1.4-3.1-3.1V98c0-1.1 1-2 2-2h316c1 0 2 1 2 2v316c0 .9-.9 2-2 2z" fill="currentColor"/></svg>
  )
}