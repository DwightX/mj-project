import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramPage from './pages/ProgramPage'

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'program', element: <ProgramPage /> },
      { path: '*', element: <HomePage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
