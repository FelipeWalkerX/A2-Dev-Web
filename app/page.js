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
      <ul>
        {roteiros.map((roteiro) => (
          <li key={roteiro.id} > {roteiro.titulo} - {roteiro.disciplina}, {roteiro.ano}º ano </li> 
        ))}
      </ul>
    </main>
    ); 
  
}