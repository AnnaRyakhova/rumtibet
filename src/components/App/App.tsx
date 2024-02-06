import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Program } from '../../pages/Program/Program'
import { Main } from '../../pages/Main/Main'
import { Layout } from '../Layout/Layout'
import ScrollToAnchor from '../ScrollToAnchor'
import { Article } from '../Article/Article'

export const App = () => (
  <>
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="program" element={<Program />} />
          <Route path="article/:id" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)
