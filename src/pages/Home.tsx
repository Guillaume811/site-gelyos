import Button from '@/components/Button/Button.tsx'
export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Page d’accueil minimaliste.</p>
      <Button onClick={() => alert('👋')}>Dire bonjour</Button>
    </section>
  )
}