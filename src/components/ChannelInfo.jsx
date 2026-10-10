export function ChannelInfo ({ channel, description }) {
    return (
        <section className="channel-info" id="canal">
            <div className="channel-avatar">
                {channel.charAt(0).toUpperCase()}
            </div>

            <div className="channel-details">
                <p className="eyebrow">CANAL DE TWITCH</p>
                <h2>{channel}</h2>
                <p>{description}</p>
            </div>

            <a
                className="twitch-button"
                href={`https://www.twitch.tv/${encodeURIComponent(channel)}`}
                target="_blank"
                rel="noreferrer"
            >
                Visitar canal ↗
            </a>
        </section>
    )
}