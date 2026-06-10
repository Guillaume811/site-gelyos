import { notFound } from 'next/navigation'
import ServiceDetail from '@/_pages/ServiceDetail/ServiceDetail'
import { getServiceRoute, serviceRouteList } from '@/ressources/routes'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return serviceRouteList.map(route => ({
    slug: route.slug,
  }))
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const serviceRoute = getServiceRoute(slug)

  if (!serviceRoute) {
    notFound()
  }

  return <ServiceDetail serviceName={serviceRoute.label} />
}
