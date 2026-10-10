export function PageHead ({ channel }) {
    return (
        <section className="page-heading" id="directo">
            <div>
                <p className="eyebrow">LIVE EXPERIENCE</p>
                <h1>Un espacio libre para disfrutar.</h1>
                <p className="page-description">
                    El directo y la comunidad en un mismo lugar.
                </p>
            </div>

            <a
                className="outline-button"
                href={`https://www.twitch.tv/${channel}`}
                target="_blank"
                rel="noreferrer"
            >
                Abrir en Twitch ↗
            </a>
        </section>
    )
}