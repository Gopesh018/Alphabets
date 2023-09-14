import './css/globals.css'
import Header from './Components/Header'

export const metadata = {
  title: 'Alphabets.Play.School',
  description: 'Play School',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
    </html>
  )
}
