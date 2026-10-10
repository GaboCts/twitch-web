import { Header } from './components/Header'
import { PageHead } from './components/PageHead'
import { StreamPlayer } from './components/StreamPlayer'
import { ChatPanel } from './components/ChatPanel'
import { ChannelInfo } from './components/ChannelInfo'
import { Footer } from './components/Footer'
import './App.css'

// Valores por cambiar
const CHANNEL = 'xCosmo_'
const DESCRIPTION = 'Bienvenido a mi espacio. Disfruta del directo.'

export default function App() {
  return (
      <div className="app" id="inicio">
          <Header channel={CHANNEL} />

          <main className="main-content">
              <PageHead channel={CHANNEL} />

              <div className="stream-layout">
                  <div className="main-column">
                      <StreamPlayer channel={CHANNEL} />

                      <ChannelInfo
                          channel={CHANNEL}
                          description={DESCRIPTION}
                      />
                  </div>

                  <ChatPanel channel={CHANNEL} />
              </div>

              <Footer />
          </main>
      </div>
  )
}