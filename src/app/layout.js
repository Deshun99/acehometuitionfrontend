import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import AuthProvider from './components/AuthProvider/AuthProvider'
import { UserProvider } from './context/UserContext'
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import Navbar from './components/AuthProvider/Navbar/Navbar'
import SidebarMenu from './components/AuthProvider/Sidebar/Sidebar'
import Footer from './components/AuthProvider/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ace Home Tuition',
  description: 'Your Next Stop in Education',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <UserProvider>
              <div className='container'>
                <SidebarMenu/>
                {children}
                <Footer />
              </div>
            </UserProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
