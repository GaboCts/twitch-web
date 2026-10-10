export function Header ({ channel }) {
    return (
        <header className="header">
            <a href="#inicio" className="brand">
                <span className="brand-icon">✦</span>
                <span>ExtraStream</span>
            </a>

            <nav className="navigation">
                <a href="#directo">Directo</a>
                <a href="#canal">Canal</a>
                <a
                    href={`https://www.twitch.tv/${channel}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Twitch ↗
                </a>
            </nav>
        </header>
    )
}