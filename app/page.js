// Importando os roteiros
import roteiros from "@/data/roteiros.json"
import RoteiroCard from "@/components/RoteiroCard"

export default function Home() {
  return (
    <main>  
      {/* <h1> é o titulo */}
      <h1>  
        Plataforma de roteiros  
      </h1> 
      {/* <p> é o texto normal */}
      <p> 
        Temos {roteiros.length} roteiros disponíveis  
      </p>
      {/* <ul> sao marcadores, neste caso, ele mostra cada um dos roteiros, como se fosse um vetor de roteiros */}
      <ul>  
        {/*Dentro do <li> eu posso escrever normal, como se ele fosse um print*/}
        {roteiros.map((roteiro) => (
          <RoteiroCard key = {roteiro.id} roteiro = {roteiro} >
            {roteiro.titulo} - {roteiro.disciplina}, {roteiro.ano}º ano
          </RoteiroCard>
          // <li key={roteiro.id} > {roteiro.titulo} - {roteiro.disciplina}, {roteiro.ano}º ano </li>  
        ))}
      </ul>
    </main>
    ); 
  
}