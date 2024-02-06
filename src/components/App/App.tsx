import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TourProgram } from '../../pages/TourProgram/TourProgram'
import { Main } from '../../pages/Main/Main'
import { Layout } from '../Layout/Layout'
import ScrollToAnchor from '../ScrollToAnchor'
import { Article } from '../../pages/Article/Article'
import { Toaster } from 'sonner'

export const App = () => (
  <>
    <Toaster closeButton expand={true} richColors />
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="program" element={<TourProgram />} />
          <Route path="article/:id" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)
