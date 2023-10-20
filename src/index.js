import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/app'

const initialTasks = [
  {
    id: 0,
    label: 'Web Core',
    isCompleted: true,
    created: new Date(2023, 8, 2, 10, 5),
  },
  {
    id: 1,
    label: 'JS Core',
    isCompleted: true,
    created: new Date(2023, 9, 3, 10, 5),
  },
  {
    id: 2,
    label: 'React',
    isCompleted: false,
    created: new Date(2023, 9, 20, 10, 26),
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App initialTasks={initialTasks} />
  </React.StrictMode>
)
