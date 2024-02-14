import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TourProgram } from '../../pages/TourProgram/TourProgram'
import { Main } from '../../pages/Main/Main'
import { Layout } from '../Layout/Layout'
import ScrollToAnchor from '../ScrollToAnchor'
import { Article } from '../../pages/Article/Article'
import { Toaster } from 'sonner'
import { Notfound } from '../../pages/Notfound/Notfound'
import { LoginPage } from '../../pages/Login/Login'
import { RequireAuth } from '../../hoc/RequireAuth'
import { SpecialPrices } from '../../pages/SpecialPrices/SpecialPrices'
import { AuthProvider } from '../../hoc/AuthProvider'

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
