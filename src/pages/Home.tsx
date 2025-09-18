import { PrimaryButtonLink, SecondaryButtonLink } from "@/components/Buttons/ButtonLink";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Page d’accueil minimaliste.</p>
      <div style={{ display: 'flex', flexDirection:'column', marginBottom: '1rem' }}>
        <PrimaryButtonLink to="/contact">Contact</PrimaryButtonLink>
        <SecondaryButtonLink to="/apropos">A propos</SecondaryButtonLink>
      </div>
    </section>
  )
}