'use client'

import { MemoryRouter } from 'react-router-dom'
import { ModalProjectProvider } from '~/components/ModalProject/providers/ModalProjectProvider'
import Home from './Home'

export default function HomeClientShell() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <ModalProjectProvider>
        <Home />
      </ModalProjectProvider>
    </MemoryRouter>
  )
}
