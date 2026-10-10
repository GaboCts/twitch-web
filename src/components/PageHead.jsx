export function PageHead ({ channel }) {
    return (
        <section className="page-heading" id="directo">
            <div>
                <p className="eyebrow">LIVE EXPERIENCE</p>
                <h1>Un espacio para disfrutar.</h1>
                <p className="page-description">
                    El directo, la comunidad y todo en un mismo lugar.
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