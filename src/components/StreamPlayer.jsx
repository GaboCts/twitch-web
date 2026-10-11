export function StreamPlayer({ channel }) {
    const parent = window.location.hostname

    const params = new URLSearchParams({
        channel,
        parent,
        muted: 'true',
    })

    return (
        <div className="stream-player">
        </div>
    )
}