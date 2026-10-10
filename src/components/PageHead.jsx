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
                Abrir en Twitch
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path d="M4,0V3H1V15H13V12h3V0Zm7.2,13.2H2.8V4.8H4V12h7.2Zm3.4-2.6H6.39L11.5,5.5,13,7V3H9l1.5,1.5L5.4,9.61V1.4h9.2Z"></path>
                        </g>
                    </g>
                </svg>
            </a>
        </section>
    )
}