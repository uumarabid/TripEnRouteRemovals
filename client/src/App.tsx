import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/main-layout'
import { HomePage } from './pages/home-page'
import { ServicesPage } from './pages/services-page'
import { ServiceDetailPage } from './pages/service-detail-page'
import { CoveragePage } from './pages/coverage-page'
import { FaqPage } from './pages/faq-page'
import { BlogPage } from './pages/blog-page'
import { BlogDetailPage } from './pages/blog-detail-page'
import { AboutPage } from './pages/about-page'
import { ContactPage } from './pages/contact-page'
import { NotFoundPage } from './pages/not-found-page'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="coverage" element={<CoveragePage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
