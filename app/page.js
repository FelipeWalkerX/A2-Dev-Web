// Importando os roteiros
import roteiros from "@/data/roteiros.json"
import Cabecalho from "@/components/cabecalho"
import ListaRoteiros from "@/components/listaRoteiros";


export default function Home() {
  return (
    <main>  
      {/* <h1> é o titulo */}
      <Cabecalho titulo = "Plataforma de roteiros"/>
      {/* <p> é o texto normal */}
      <p> 
        Temos {roteiros.length} roteiros disponíveis  
      </p>
      {/* .map e ul some e vira so essa linha agora, pois ta tudo dentro do arquivo listaRoteiros agora */}
          <ListaRoteiros roteiros = {roteiros} />
    </main>
    ); 
  
}