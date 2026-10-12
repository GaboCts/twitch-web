export function Header ({ channel }) {
    return (
        <header className="header">
            <a href="/" className="brand">
                <span className="brand-icon">✦</span>
                <span className="brand-logo">Extra<p className="brand-p">Stream</p></span>
            </a>

            <nav className="navigation">
                <a
                    className="support-tab"
                    href="https://donate.stripe.com/9B64gs2j013BcTqcWY5os0g"
                    target="_blank"
                    rel="noreferrer"
                >
                    Apoya al creador
                    <svg fill="none" viewBox="100 100 312 312">
                        <path fill="#533afd" fill-rule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clip-rule="evenodd"/>
                    </svg>
                </a>
            </nav>
        </header>
    )
}