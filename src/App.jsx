import { Routes, Route } from 'react-router'
import { lazy } from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const StreamPage = lazy(() => import('./pages/StreamPage.jsx'))

const description = 'Bienvenido a mi espacio. Disfruta del directo.'

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:channel" element={<StreamPage description={ description } />} />
            </Routes>
            <Footer />
        </>
  )
}