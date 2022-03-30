import { browser } from '$app/env'
import { writable } from "svelte/store"

const initialValue = browser ? window.localStorage.getItem('theme') ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light') : 'light'

export const theme = writable(initialValue)

theme.subscribe(value => {
    if (browser) {
        localStorage.setItem("theme", value)
    }
})