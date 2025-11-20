import { useMemo } from 'react'
import { portfolioStaticData } from './staticData'

export function usePortfolioData() {
  return useMemo(
    () => ({
      data: portfolioStaticData,
      loading: false,
      error: null,
      reload: () => {},
    }),
    [],
  )
}
