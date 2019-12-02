import { writable } from 'svelte/store'
import { storage } from './util'

function createTokenStore() {

  const localStorageToken = storage.getItem('token')

  const { subscribe, set } = writable(localStorageToken)

  return {
    subscribe, 
    set: token => {
      storage.setItem('token', token)
      set(token)
    },
    unset: () => {
      storage.removeItem('token')
      set(null)
    }
  }
}

export const token = createTokenStore()
