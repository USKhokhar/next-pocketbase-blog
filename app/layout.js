import Link from "next/link"
import { Suspense } from "react"
import Loading from "./loading"
import './global.css'

export const metadata = {
  title: 'Dusky Desk',
  description: 'The Blog',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <header>
          <Link style={{textDecoration: 'none'}} href={'/'}>
            <h1>Dusky Desk</h1>
          </Link>

          <nav>
            <ul>
              <Link style={{textDecoration: 'none'}} href={'/'}>
                <li>Read</li>
              </Link>
              <Link style={{textDecoration: 'none'}} href={'/about'}>
                <li>About</li>
              </Link>
              <Link style={{textDecoration: 'none'}} href={'/contact'}>
                <li>Contact</li>
              </Link>
            </ul>
          </nav>

          {/* <Link style={{textDecoration: 'none'}} href={'https://github.com/USKhokhar'}>
            Made With 💜 
          </Link> */}
        </header>

        <Suspense fallback={<Loading />}>
          <main>
            {children}
          </main>
        </Suspense>
      </body>
    </html>
  )
}
