import { TwitchButton } from './TwitchButton'

export function PageHead ({ channel }) {
    return (
        <section className="page-heading">
            <div>
                <p className="eyebrow">LIVE EXPERIENCE</p>
                <h1>Un espacio libre para disfrutar.</h1>
                <p className="page-description">
                    El directo y la comunidad en un mismo lugar.
                </p>
            </div>

            <TwitchButton text="Abrir en twitch" channel={ channel } />
        </section>
    )
}