import localFont from 'next/font/local'

export const font = localFont({
  display: 'swap',
  src: [
    {
      path: './fonts/BasierCircle-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/BasierCircle-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BasierCircle-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/BasierCircle-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})
