import SiteProviders from './Providers'

type SiteLayoutProps = Readonly<{ children: React.ReactNode }>

export default function SiteLayout({ children }: SiteLayoutProps) {
  return <SiteProviders>{children}</SiteProviders>
}
