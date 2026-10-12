import { useRef } from 'react'
import { useRouter } from '../hooks/useRouter'

export default function HomePage() {
    const { navigateTo } = useRouter()

    const inputRef = useRef()

    const handleClearInput = (event) => {
        event.preventDefault()

        inputRef.current.value = ""
    }

    const handleSearch = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const searchChannel = formData.get('search').toLowerCase()

        const url = searchChannel ? `/${encodeURIComponent(searchChannel)}` : ''
        navigateTo(url)
    }

    return (
        <main className="home-page body-page">
            <section className="home-hero">
                <span className="home-eyebrow">
                    TU ESPACIO DE STREAMING
                </span>

                <h1>
                    Descubre tu próximo
                    <span> directo.</span>
                </h1>

                <p>
                    Encuentra canales, explora contenido y disfruta
                    de las transmisiones en un solo lugar.
                </p>

                <form className="channel-search" onSubmit={handleSearch} role="search">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m16 16 4 4" />
                    </svg>

                    <input
                        name="search"
                        ref={inputRef}
                        placeholder="Buscar canales..."
                        required
                    />

                    <button
                        onClick={handleClearInput}
                        type="button"
                        className="clear-search"
                    >
                        ×
                    </button>
                </form>
            </section>
        </main>
    )
}