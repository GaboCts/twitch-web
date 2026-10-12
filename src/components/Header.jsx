export function Header ({ channel }) {
    return (
        <header className="header">
            <a href="/" className="brand">
                <span className="brand-icon">✦</span>
                <span className="brand-logo">Extra<p className="brand-p">Stream</p></span>
            </a>

            <nav className="navigation">
                <a
                    className="twitch-new-tab"
                    href={`https://www.twitch.tv/${channel}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Twitch
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
            </nav>
        </header>
    )
}