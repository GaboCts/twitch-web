export function StreamPlayer ({ channel }) {
    return (
        <div className="stream-player">
            <iframe
                src={`https://player.twitch.tv/?channel=${encodeURIComponent(
                    channel
                )}&parent=${encodeURIComponent(parent)}&muted=true`}
                title="Transmisión en directo"
                allowFullScreen
                loading="lazy"
                height="<height>"
                width="<width>"
            />
        </div>
    )
}