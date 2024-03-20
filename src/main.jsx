import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Result from './Result.jsx'
import { FilePathProvider } from './filePathContext.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>}/>
      <Route path='/result' element={<Result/>}/>
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
