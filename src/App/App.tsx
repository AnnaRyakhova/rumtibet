import { Toaster } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TourProgram } from '@/pages/TourProgram/TourProgram'
import { Main } from '@/pages/Main/Main'
import { Article } from '@/pages/Article/Article'
import { Notfound } from '@/pages/Notfound/Notfound'
import { Layout } from '@/components/Layout/Layout'
import ScrollToAnchor from '@/components/ScrollToAnchor'
import { LoginPage } from '@/pages/Login/Login'
import { RequireAuth } from '@/hoc/RequireAuth'
import { SpecialPrices } from '@/pages/SpecialPrices/SpecialPrices'
import { AuthProvider } from '@/hoc/AuthProvider'

import './App.css'
import { LoginPage } from '../../pages/Login/Login'
import { RequireAuth } from '../../hoc/RequireAuth'
import { SpecialPrices } from '../../pages/SpecialPrices/SpecialPrices'
import { AuthProvider } from '../../hoc/AuthProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TourProgram } from '@/pages/TourProgram/TourProgram'
import { Main } from '@/pages/Main/Main'
import { Article } from '@/pages/Article/Article'
import { Layout } from '@/components/Layout/Layout'
import ScrollToAnchor from '@/components/ScrollToAnchor'

import './App.css'

export const App = () => (
  <>
    <Toaster closeButton expand={true} richColors />
    <BrowserRouter>
      <ScrollToAnchor />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="program" element={<TourProgram />} />
            <Route path="article/:id" element={<Article />} />
            <Route
              path="special"
              element={
                <RequireAuth>
                  <SpecialPrices />
                </RequireAuth>
              }
            />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>
)
