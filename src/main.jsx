import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About.jsx'
import Hero from './components/Hero.jsx'
import { FilePathProvider } from './context/filePathContext.jsx'
import Test from './components/Test.jsx'
import Result from './components/Result.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path='' element={<Hero />} />
      <Route path='test' element={<Test />} />
      <Route path='about' element={<About />} />
      <Route path='result' element={<Result />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilePathProvider>
    <RouterProvider router={router}/>
    </FilePathProvider>
  </React.StrictMode>,
)
