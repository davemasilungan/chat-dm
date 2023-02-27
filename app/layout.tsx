import './globals.css';
// import Head from "./head"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div>
          {/* SideBar */}
          {/* ClietProvider - Notification */}
          <div>{children}</div>

        </div>
        </body>
    </html>
  )
}
