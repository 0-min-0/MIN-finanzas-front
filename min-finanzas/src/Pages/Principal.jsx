import React from 'react'

export const Principal = () => {
    return (
        <div className="h-full">
            <div
                className="h-1/2 w-full bg-gradient-to-b from-[#9589e8] via-[#afa0f4] to-[#c9b7ff]"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #9589e8, #afa0f4, #c9b7ff, #ffffff)',
                }}
            >
                Bienvenido
            </div>
            <div className="h-1/2 bg-white">
            </div>
        </div>
    )
}

