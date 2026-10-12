import { Routes, Route } from 'react-router'

import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { StreamPage } from './pages/StreamPage'
import { Footer } from './components/Footer'
import './App.css'

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