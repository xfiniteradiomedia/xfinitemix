import React, { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [endpoint, setEndpoint] = useState(import.meta.env.VITE_NAVIDROME_ENDPOINT || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Authenticate with Navidrome API and store session
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Xfinite Mix Login</h1>
      <form className="bg-gray-800 p-8 rounded shadow-md w-80 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="p-2 rounded bg-gray-700"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="p-2 rounded bg-gray-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="p-2 rounded bg-gray-700"
          type="text"
          placeholder="Navidrome Endpoint"
          value={endpoint}
          onChange={e => setEndpoint(e.target.value)}
        />
        <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded font-bold" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}