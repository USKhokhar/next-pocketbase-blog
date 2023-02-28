import Link from "next/link"
import { Suspense } from "react"
import Loading from "./posts/[id]/loading"
import './global.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <header>
          <Link href={'/'}>
                <h1>Dusky Desk</h1>
            </Link>

          <nav>
            <ul>
              <Link href={'/'}>
                <li>Read</li>
              </Link>
              <Link href={'/about'}>
                <li>About</li>
              </Link>
              <Link href={'/contact'}>
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
        </header>

        <Suspense fallback={<Loading />}>
          <main>
            {children}
          </main>
        </Suspense>
      
        <footer>
          Made with 💜 
        </footer>
      </body>
    </html>
  )
}
