import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
    return (
        <>
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <ReactLoading type='bubbles' color='#00000' />
            </div>
        </>
    )
}

export default Loading