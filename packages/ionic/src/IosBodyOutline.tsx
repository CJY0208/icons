import React from 'react'

export default function IosBodyOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 47.959c17.645 0 32 14.351 32 31.991s-14.355 31.99-32 31.99-32-14.351-32-31.99c0-17.64 14.355-31.991 32-31.991m0-15.995c-26.51 0-48 21.483-48 47.986 0 26.502 21.49 47.985 48 47.985s48-21.483 48-47.985c0-26.503-21.49-47.986-48-47.986z" fill="currentColor"/><path d="M424 144H88c-13.255 0-24 10.747-24 24s10.745 24 24 24h100.451c5.549 0 13.197 4.295 17.216 14.708 4.651 12.055 2.37 33.33-.539 51.444l-3.923 21.26c-.019.104-.205.1-.205.203l-32.229 172.238c-2.303 13.051 6.487 25.494 19.54 27.797a24.52 24.52 0 0 0 4.218.367c11.357 0 20.917-8.19 22.97-19.836L236 340.242v.166S243.25 309 255.452 309h1.096C269 309 274 340.408 274 340.408v-.082l21.483 119.895c2.052 11.642 12.331 19.815 23.763 19.815a25.13 25.13 0 0 0 4.268-.368c13.053-2.303 21.821-14.76 19.519-27.811l-32.349-172.251c-.002-.008.011-.02.009-.027-.019-.104-.032-.217-.052-.322l-3.771-21.411c-2.909-18.119-5.188-39.083-.538-51.137C310.351 196.295 318.5 192 323.549 192H424c13.255 0 24-10.747 24-24s-10.745-24-24-24zM88 176.113c-4.411 0-8-3.646-8-8.057 0-4.411 3.589-8.057 8-8.057h336c4.411 0 8 3.59 8 8s-3.589 8-8 8H322.5c-15.538 0-27.438 14.738-30.982 23.922-4.846 12.557-5.004 31.942-.388 60.688l-.009.104.006.11 3.367 19.138.562 3.241 32.252 171.628c.5 2.834-.62 4.961-1.332 5.977-.713 1.017-2.335 2.799-5.179 3.301a8.324 8.324 0 0 1-1.427.126c-3.893 0-7.207-2.639-7.883-6.472L290.255 338h-.015c-.271-2-1.828-10.05-5.022-18.771-2.278-6.217-4.844-11.034-7.844-15.005-7.091-9.388-15.239-11.224-20.826-11.224h-1.096c-5.47 0-13.503 1.731-20.71 10.938-3.05 3.896-5.729 8.671-8.19 14.802-3.628 9.037-5.505 17.654-5.708 18.613l-.11.369-20.728 119.9c-.693 3.886-3.75 6.596-7.441 6.596-.459 0-.932-.043-1.403-.127-2.84-.5-4.455-2.275-5.165-3.288a7.961 7.961 0 0 1-1.323-5.975l32.257-171.562.004-.019.174-.927 3.775-21.33.022-.125.021-.126c4.629-28.829 4.527-48.3-.332-60.891-3.543-9.181-13.576-23.737-31.76-23.737" fill="currentColor"/></svg>
  )
}