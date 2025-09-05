export const metadata = {
  title: 'Next.js SPA Hello World',
  description: 'A simple SPA built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '20px', background: '#f0f0f0', marginBottom: '20px' }}>
          <a href="/" style={{ marginRight: '20px' }}>Home</a>
          <a href="/about/">About</a>
        </nav>
        {children}
      </body>
    </html>
  )
}