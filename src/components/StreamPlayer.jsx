export function StreamPlayer({ channel }) {
    const parent = window.location.hostname

    const params = new URLSearchParams({
        channel,
        parent,
        muted: 'false',
        autoplay: 'true',
    })

    return (
        <div className="stream-player">
            <iframe
                src={`https://player.twitch.tv/?${params}`}
                title="Transmisión en directo"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}