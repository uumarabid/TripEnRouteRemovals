import { Outlet } from 'react-router-dom'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'
import { WhatsAppFab } from './whatsapp-fab'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  )
}
