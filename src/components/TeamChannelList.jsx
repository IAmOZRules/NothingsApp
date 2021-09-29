import React from 'react'

import { AddChannel } from '../assets'

const TeamChannelList = ({ children, error = false, loading, type }) => {
    if (error) {
        return type === 'team' ? (
            <div className='team-channel-list'>
                <p className="team-channel-list__message">
                    Connection error. Please try again later.
                </p>
            </div>
        ) : null
    }

    if (loading) {
        return (
            <div className='team-channel-list'>
                <p className="team-channel-list__message loading">
                    {type === 'teams' ? 'Channels' : 'Messages'} Loading...
                </p>
            </div>
        )
    }

    return (
        <div>
            <div className="team-channel-list">
                <div className="team-channel-list__header">
                    <p className="team-channel-list__head">
                        {type === 'teams' ? 'Channels' : 'Direct Messages'}
                    </p>
                    {/* Button to add channel */}
                </div>
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
