import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  .createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
