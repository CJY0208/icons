import React from 'react'

export default function IosFlowerOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M395.057 284.252c55.929 0 84.943-11.62 84.943-28.002s-29.016-28.003-84.943-28.003c-28.732 0-64.708 7.391-92.902 14.578a47.73 47.73 0 0 0-3.973-9.75c25.009-14.852 55.645-35.05 75.947-55.353 39.547-39.547 52.023-68.458 40.44-80.042-2.747-2.748-6.472-4.142-11.079-4.142-14.818 0-38.796 14.415-68.963 44.582-20.282 20.282-40.459 50.873-55.307 75.869a47.738 47.738 0 0 0-9.755-4.062C276.64 181.757 284 145.868 284 117.192 284.002 61.266 272.382 32 256 32s-28.002 29.266-28.002 85.194c0 28.676 7.362 64.565 14.536 92.735a47.682 47.682 0 0 0-9.755 4.062c-14.847-24.996-35.023-55.587-55.305-75.869-30.165-30.165-54.144-44.582-68.964-44.582-4.609 0-8.331 1.394-11.079 4.142-11.584 11.583.894 40.494 40.44 80.041 20.303 20.303 50.938 40.501 75.947 55.353a47.733 47.733 0 0 0-3.974 9.75c-28.194-7.188-64.169-14.578-92.901-14.578C61.016 228.247 32 239.618 32 256s29.016 28.252 84.944 28.252c28.777 0 64.82-7.413 93.034-14.611a47.598 47.598 0 0 0 4.055 9.656c-25.048 14.863-55.801 35.119-76.161 55.479-39.547 39.548-52.023 68.459-40.44 80.043 2.748 2.748 6.471 4.142 11.078 4.142 14.819 0 38.796-14.415 68.963-44.583 20.382-20.381 40.659-51.177 55.526-76.238a47.838 47.838 0 0 0 9.651 3.967c-7.211 28.238-14.654 64.367-14.654 93.201C227.998 451.234 239.618 480 256 480s28.002-28.766 28.002-84.693c0-28.834-7.441-64.963-14.652-93.201a47.806 47.806 0 0 0 9.65-3.967c14.867 25.062 35.145 55.857 55.527 76.239 30.164 30.165 54.144 44.582 68.963 44.582 4.608 0 8.33-1.394 11.078-4.142 11.584-11.584-.894-40.495-40.439-80.043-20.361-20.359-51.114-40.615-76.162-55.479a47.533 47.533 0 0 0 4.055-9.656c28.215 7.199 64.258 14.612 93.035 14.612zm-75.065-29.311c30.144-7.014 55.893-10.694 75.064-10.694 21.329 0 39.453 1.806 52.41 5.222 9.705 2.559 14.005 5.317 15.736 6.781-1.731 1.463-6.031 4.221-15.736 6.779-12.958 3.416-31.081 5.223-52.41 5.223-19.176 0-44.927-3.68-75.075-10.695l.011-2.616zm25.849-105.505c35.382-35.383 52.682-39.412 56.818-39.846-.211 2.305-1.343 7.326-6.404 15.991-6.786 11.62-18.35 25.738-33.439 40.828-13.533 13.534-34.3 29.111-60.513 45.438a64.194 64.194 0 0 0-1.895-1.904c16.324-26.214 31.901-46.975 45.433-60.507zm-136.143 62.41c-26.213-16.326-46.979-31.904-60.512-45.437-15.09-15.091-26.653-29.208-33.439-40.828-5.061-8.665-6.194-13.687-6.404-15.992 4.138.435 21.436 4.463 56.818 39.845 13.533 13.533 29.108 34.295 45.433 60.507a63.064 63.064 0 0 0-1.896 1.905zm-92.754 56.406c-21.339 0-39.483-1.845-52.471-5.335-9.689-2.604-13.961-5.394-15.675-6.87 1.75-1.451 6.077-4.177 15.796-6.689 12.927-3.343 31.029-5.11 52.351-5.11 19.172 0 44.922 3.68 75.064 10.694l.01 2.615c-30.149 7.015-55.899 10.695-75.075 10.695zm49.216 94.812c-35.383 35.382-52.68 39.41-56.818 39.846.21-2.305 1.343-7.326 6.404-15.992 6.786-11.619 18.349-25.736 33.439-40.828 13.587-13.586 34.457-29.229 60.815-45.625a65.246 65.246 0 0 0 1.789 1.779c-16.395 26.36-32.04 47.231-45.629 60.82zM302 300.465c26.356 16.395 47.227 32.037 60.814 45.625 15.091 15.092 26.653 29.209 33.439 40.828 5.062 8.666 6.193 13.688 6.403 15.992-4.138-.436-21.436-4.464-56.817-39.846-13.589-13.59-29.234-34.463-45.63-60.82a65.321 65.321 0 0 0 1.791-1.779zM249.222 64.678c2.548-9.703 5.297-14.055 6.778-15.834 1.48 1.78 4.23 6.131 6.777 15.834 3.418 13.015 5.225 31.174 5.225 52.516 0 19.117-3.66 44.781-10.637 74.821h-2.73c-6.977-30.04-10.638-55.704-10.638-74.821.001-21.341 1.807-39.501 5.225-52.516zm13.56 382.934c-2.569 9.707-5.339 13.954-6.782 15.636-1.444-1.682-4.212-5.929-6.782-15.636-3.415-12.901-5.22-30.988-5.22-52.308 0-19.228 3.701-45.066 10.752-75.316h2.5c7.052 30.25 10.752 56.089 10.752 75.316 0 21.32-1.805 39.407-5.22 52.308zM256 288c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"/><path d="M344.86 405.678c-24.529-17.674-48.394-51.732-48.394-51.732s7.031 41.059 1.854 75.946c11.678 21.779 26.139 35.253 36.643 35.253 1.749 0 3.432-.324 5.042-.976 11.874-4.797 14.385-24.984 4.855-58.491zm-11.122 42.888c-2.738-1.46-9.407-6.369-18.992-22.27.688-7.872 1.098-16.337 1.219-25.282 5.012 4.88 9.947 9.437 14.747 13.613 5.104 19.781 4.242 30.152 3.026 33.939z" fill="currentColor"/><path d="M213.679 82.608c-13.292-23.51-26.139-35.255-36.644-35.255-1.749 0-3.431.325-5.042.976-11.868 4.795-14.497 23.211-4.87 58.441 21.252 15.98 48.374 51.55 48.374 51.55s-7.747-40.82-1.818-75.712zm-17.641 28.761a350.796 350.796 0 0 0-14.769-13.574c-5.084-19.731-4.223-30.082-3.008-33.863 2.737 1.459 9.407 6.369 18.994 22.27-.687 7.838-1.094 16.264-1.217 25.167z" fill="currentColor"/><path d="M82.357 298.568c-27.422 15.505-38.836 30.402-34.277 41.687 2.806 6.944 10.913 10.675 23.842 10.675 9.182 0 22.434-1.559 34.672-5.826 17.405-23.934 51.712-48.387 51.712-48.387s-41.307 6.119-75.949 1.851zm15.28 32.388c-10.088 2.606-18.909 3.974-25.716 3.974-4.092 0-6.733-.502-8.223-.97 1.477-2.755 6.407-9.411 22.253-18.966 7.872.689 16.338 1.099 25.284 1.22-4.87 5.004-9.42 9.936-13.598 14.742z" fill="currentColor"/><path d="M463.92 172.245c-2.806-6.945-10.914-10.675-23.844-10.675-9.178 0-21.4 1.715-34.654 5.822-18.088 23.774-51.699 48.387-51.699 48.387s40.778-7.28 75.918-1.849c27.423-15.504 38.838-30.402 34.279-41.685zm-37.873 25.259c-7.867-.689-16.327-1.097-25.267-1.218a357.64 357.64 0 0 0 13.6-14.749c10.081-2.602 18.895-3.968 25.697-3.968 4.093 0 6.733.502 8.225.97-1.478 2.755-6.409 9.412-22.255 18.965z" fill="currentColor"/><path d="M163.135 408.98c-8.42 30.34-5.956 48.938 5.244 53.69a13.372 13.372 0 0 0 5.275 1.066c11.107 0 24.698-13.124 39.528-39.015-4.184-32.22 2.351-70.779 2.351-70.779s-21.534 31.394-52.398 55.038zm11.846 38.227c-.904-2.966-2.147-11.15 2.312-29.159 6.048-5.079 12.323-10.782 18.743-17.032.095 6.979.366 13.687.81 20.039-10.38 17.605-18.326 24.335-21.865 26.152z" fill="currentColor"/><path d="M343.622 49.826a13.392 13.392 0 0 0-5.274-1.066c-11.105 0-26.207 14.287-39.527 39.013 4.514 22.894-2.393 71.053-2.393 71.053s23.239-34.326 52.342-54.956c8.397-31.87 6.095-49.271-5.148-54.044zm-8.995 44.955c-6.029 5.051-12.277 10.72-18.66 16.931a359.613 359.613 0 0 0-.812-20.269c10.379-17.607 18.327-24.336 21.864-26.153.911 2.984 2.167 11.251-2.392 29.491z" fill="currentColor"/><path d="M103.209 163.367C93 159.5 80.717 158.366 72.457 158.366c-12.267 0-20.042 3.573-22.881 10.261-5.004 11.792 9.97 29.985 37.948 44.805 29.726-3.932 70.688 2.336 70.688 2.336S121 187.067 103.209 163.367zm-38.175 11.848c1.381-.414 3.775-.848 7.424-.848 5.815 0 13.242 1.088 21.687 3.165 5.077 6.049 10.781 12.33 17.034 18.754-6.959.096-13.648.367-19.984.81-17.632-10.396-24.355-18.351-26.161-21.881z" fill="currentColor"/><path d="M424.477 299.066c-25.307 5.6-70.78-2.35-70.78-2.35s34.638 25.615 55.014 52.393c11.959 4.223 22.555 5.022 30.833 5.022 12.266 0 20.041-3.573 22.88-10.261 5.004-11.79-8.141-28.069-37.947-44.804zm15.065 39.066c-5.833 0-13.287-1.095-21.765-3.185-5.078-6.053-10.774-12.326-17.013-18.734 6.98-.095 13.688-.365 20.041-.811 17.631 10.396 24.354 18.352 26.158 21.882-1.378.413-3.773.848-7.421.848z" fill="currentColor"/></svg>
  )
}