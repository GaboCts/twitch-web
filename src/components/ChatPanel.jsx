export function ChatPanel({ channel }) {
    const parent = window.location.hostname

    const params = new URLSearchParams({
        parent,
        darkpopout: '',
    })

    const chatUrl = new URL(
        `https://www.twitch.tv/embed/${encodeURIComponent(channel)}/chat?${params}`
    )

    return (
        <section className="chat-panel">
            <iframe
                src={chatUrl.toString()}
                title="Chat de Twitch"
                allow="clipboard-write"
            />
        </section>
    )
}