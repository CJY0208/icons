import React from 'react'

export default function Database({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M5 6c0 .026.01.17.292.42c.28.248.744.518 1.402.765C8.004 7.675 9.88 8 12 8s3.997-.324 5.306-.815c.658-.247 1.121-.517 1.402-.766C18.99 6.17 19 6.026 19 6c0-.026-.01-.17-.292-.42c-.28-.248-.744-.518-1.402-.765C15.996 4.325 14.12 4 12 4s-3.997.324-5.306.815c-.658.247-1.121.517-1.402.766C5.01 5.83 5 5.974 5 6zM3 6c0-.803.437-1.448.965-1.916c.53-.469 1.238-.846 2.027-1.142C7.578 2.347 9.702 2 12 2c2.297 0 4.422.347 6.008.942c.79.296 1.498.673 2.027 1.142C20.562 4.552 21 5.197 21 6v12c0 .803-.438 1.448-.965 1.916c-.53.469-1.238.846-2.027 1.142c-1.586.595-3.71.942-6.008.942c-2.297 0-4.422-.348-6.008-.942c-.79-.296-1.498-.673-2.027-1.142C3.437 19.448 3 18.803 3 18V6zm2 4c0 .025.01.17.292.42c.28.248.744.518 1.402.765C8.004 11.675 9.88 12 12 12s3.997-.324 5.306-.815c.658-.247 1.121-.517 1.402-.766c.282-.25.292-.394.292-.419V8.616a8.52 8.52 0 0 1-.992.442C16.422 9.653 14.298 10 12 10c-2.297 0-4.422-.347-6.008-.942A8.52 8.52 0 0 1 5 8.616V10zm0 2.616V14c0 .025.01.17.292.42c.28.248.744.518 1.402.765C8.004 15.675 9.88 16 12 16s3.997-.324 5.306-.815c.658-.247 1.121-.517 1.402-.766c.282-.25.292-.394.292-.419v-1.384c-.31.164-.643.31-.992.442c-1.586.595-3.71.942-6.008.942c-2.297 0-4.422-.348-6.008-.942A8.518 8.518 0 0 1 5 12.616zm0 4V18c0 .026.01.17.292.42c.28.248.744.518 1.402.765C8.004 19.675 9.88 20 12 20s3.997-.324 5.306-.815c.658-.247 1.121-.517 1.402-.765c.282-.25.292-.395.292-.42v-1.384c-.31.164-.643.31-.992.442c-1.586.595-3.71.942-6.008.942c-2.297 0-4.422-.348-6.008-.942A8.518 8.518 0 0 1 5 16.616z" fill="currentColor"/></g></svg>
  )
}