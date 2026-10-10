export function ChatPanel ({ channel }) {
    return (
        <section className="chat-panel">
            <div className="chat-header">
                <h2>Chat en vivo</h2>
                <span className="chat-indicator">
                    <span className="status-dot" />
                    Twitch
                </span>
            </div>

            <iframe
                src={`https://www.twitch.tv/embed/${encodeURIComponent(
                    channel
                )}/chat?parent=${encodeURIComponent(parent)}&darkpopout`}
                title="Chat de Twitch"
                loading="lazy"
            />
        </section>
    )
}