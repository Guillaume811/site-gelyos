import type { PortfolioData } from './types'
import { applicationProjects } from './data/applications'
import { ecommerceProjects } from './data/ecommerce'
import { vitrineProjects } from './data/vitrine'
import { landingpageProjects } from './data/landingpage'

export const portfolioStaticData: PortfolioData = {
  vitrine: vitrineProjects,
  ecommerce: ecommerceProjects,
  application: applicationProjects,
  landingpage: landingpageProjects,
}
