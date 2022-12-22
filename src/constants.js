// @flow

export const SC_ATTR =
  (typeof process !== 'undefined' && process.env.SC_ATTR) ||
  'data-styled-components'
export const SC_STREAM_ATTR = 'data-styled-streamed'
export const CONTEXT_KEY = '__styled-components-stylesheet__'

export const IS_BROWSER =
  typeof window !== 'undefined' && 'HTMLElement' in window

// At brilliant - we always want to disable speedy
// Since we use this to render interactives inside of a shadowDOM
// And SPEEDY MODE with the shadowDOM
export const DISABLE_SPEEDY = true
