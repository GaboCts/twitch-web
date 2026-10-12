import { Header } from './components/Header'
import { PageHead } from './components/PageHead'
import { StreamPlayer } from './components/StreamPlayer'
import { ChatPanel } from './components/ChatPanel'
import { ChannelInfo } from './components/ChannelInfo'
import { Footer } from './components/Footer'
import './App.css'

// Valores por cambiar
const channel = 'xCosmo_'
const title = `Extra Stream - ${ channel }`
const description = 'Bienvenido a mi espacio. Disfruta del directo.'

export default function App() {
    return (
        <>
            <title>{ title }</title>
            <div id="inicio">
                <Header channel={ channel } />

                <main className="main-content">
                    <PageHead channel={ channel } />

                    <div className="stream-layout">
                        <div className="main-column">
                            <StreamPlayer channel={ channel } />
                            <ChannelInfo channel={ channel } description={description} />
                        </div>

                        <ChatPanel channel={ channel } />
                    </div>

                    <Footer />
                </main>
            </div>
        </>
  )
}