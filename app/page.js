// Importando os roteiros
import roteiros from "@/data/roteiros.json"
import RoteiroCard from "@/components/roteiroCard"
import Cabecalho from "@/components/cabecalho"


export default function Home() {
  return (
    <main>  
      {/* <h1> é o titulo */}
      <Cabecalho titulo = "Plataforma de roteiros"/>
      {/* <p> é o texto normal */}
      <p> 
        Temos {roteiros.length} roteiros disponíveis  
      </p>
      {/* <ul> sao marcadores, neste caso, ele mostra cada um dos roteiros, como se fosse um vetor de roteiros */}
      <ul>  
        {roteiros.map((roteiro) => (
          <RoteiroCard key = {roteiro.id} roteiro = {roteiro} />
        ))}
      </ul>
    </main>
    ); 
  
}