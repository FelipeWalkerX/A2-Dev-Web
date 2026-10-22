import roteiros from "@/data/roteiros.json"

export default function Home() {
  return (
    <main>
      <h1>
          Plataforma de roteiros
      </h1>
        <p>
          Temos {roteiros.length} roteiros disponíveis
        </p>
    </main>
    ); 
}