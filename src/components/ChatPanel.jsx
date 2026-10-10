export function ChatPanel({ channel }) {
    const parent = window.location.hostname

    const chatUrl = new URL(
        `https://www.twitch.tv/embed/${encodeURIComponent(channel)}/chat`
    )

    chatUrl.searchParams.set('parent', parent)
    chatUrl.searchParams.set('darkpopout', '')

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