import { useParams } from 'react-router'

import { PageHead } from '../components/PageHead'
import { StreamPlayer } from '../components/StreamPlayer'
import { ChatPanel } from '../components/ChatPanel'
import { ChannelInfo } from '../components/ChannelInfo'

export default function StreamPage ({ description }) {
    const { channel } = useParams()
    const title = `Extra Stream - ${ channel }`
    
    return (
        <>
            <title>{ title }</title>
            <div className="body-page">
                <main className="main-content">
                    <PageHead channel={ channel } />

                    <div className="stream-layout">
                        <div className="main-column">
                            <StreamPlayer channel={ channel } />
                            <ChannelInfo channel={ channel } description={description} />
                        </div>

                        <ChatPanel channel={ channel } />
                    </div>
                </main>
            </div>
        </>
    )
}