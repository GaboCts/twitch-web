import { TwitchButton } from "./TwitchButton"

export function ChannelInfo ({ channel, description }) {
    return (
        <section className="channel-info" id="canal">
            <div className="channel-avatar">
                <img className="channel-avatar-picture" src={`https://unavatar.io/twitch/${ channel }`} />
            </div>

            <div className="channel-details">
                <p className="eyebrow">INFORMACIÓN DEL STREAM</p>
                <h2>{channel}</h2>
                <p>{description}</p>
            </div>

            <TwitchButton text="Visitar canal" channel={channel} />
        </section>
    )
}