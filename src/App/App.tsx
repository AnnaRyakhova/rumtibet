import { Toaster } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TourProgram } from '@/pages/TourProgram/TourProgram'
import { Main } from '@/pages/Main/Main'
import { Article } from '@/pages/Article/Article'
import { Notfound } from '@/pages/Notfound/Notfound'
import { Layout } from '@/components/Layout/Layout'
import ScrollToAnchor from '@/components/ScrollToAnchor'

import './App.css'

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
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </>
)
