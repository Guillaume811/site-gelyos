import type { PortfolioData } from './types'
import { applicationProjects } from './data/applications'
import { ecommerceProjects } from './data/ecommerce'
import { vitrineProjects } from './data/vitrine'
import { freelanceProjects } from './data/freelance'

export const portfolioStaticData: PortfolioData = {
  vitrine: vitrineProjects,
  ecommerce: ecommerceProjects,
  application: applicationProjects,
  freelance: freelanceProjects,
}
