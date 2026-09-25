import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

export function useResource(endpoint) {
  const [state, setState] = useState({ items: [], loading: true, error: '' })

  useEffect(() => {
    const controller = new AbortController()

    fetchCollection(endpoint, controller.signal)
      .then((items) => setState({ items, loading: false, error: '' }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setState({ items: [], loading: false, error: error.message })
        }
      })

    return () => controller.abort()
  }, [endpoint])

  return state
}
