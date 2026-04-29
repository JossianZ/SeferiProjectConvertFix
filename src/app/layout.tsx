export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning style={{ width: '100%', height: '100%' }}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, width: '100%', minHeight: '100vh', position: 'relative' }}>
        {children}
      </body>
    </html>
  )
}
