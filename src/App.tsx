import { Suspense, useState } from 'react'
import './App.css'
import { Loader } from './components/ui/Loader'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {


  return (
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
