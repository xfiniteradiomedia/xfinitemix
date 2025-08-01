import React from 'react'

export default function PlayerBar() {
  // TODO: Implement full audio player controls and queue
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-950 border-t border-gray-800 p-4 flex items-center justify-between z-50">
      <div>
        {/* Song/album info placeholder */}
        <span className="font-bold">No track playing</span>
      </div>
      <div>
        {/* Playback controls placeholder */}
        <button className="mx-1 bg-gray-700 text-white px-4 py-2 rounded">Play</button>
        <button className="mx-1 bg-gray-700 text-white px-4 py-2 rounded">Pause</button>
      </div>
      <div>
        {/* Queue/playlist controls placeholder */}
        <span>Queue: 0</span>
      </div>
    </div>
  )
}