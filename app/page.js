"use client";
import { useState } from "react"

// Importando os roteiros
import roteiros from "@/data/roteiros.json"
import Cabecalho from "@/components/cabecalho"
import ListaRoteiros from "@/components/listaRoteiros";


export default function Home() {
  const [disciplina, setDisciplina] = useState("");
  const roteirosFiltrados = roteiros.filter((roteiro) => disciplina === "" || roteiro.disciplina === disciplina)  //Ele funciona como um for e um if junto
  return (
    <main>  
      {/* <h1> é o titulo */}
      <Cabecalho titulo = "Plataforma de roteiros"/>
      {/* <p> é o texto normal */}
      <p> 
        Temos {roteiros.length} roteiros disponíveis  
      </p>
      <select value = {disciplina} onChange={(e) => setDisciplina(e.target.value)}>
        <option value = ""> Escolha uma disciplina: </option>
        <option value = "Matemática"> Matemática </option>
        <option value = "História"> História </option>
        <option value = "Ciências"> Ciências </option>
        <option value = "Português"> Português </option>
      </select>
      <p>Voce escolheu a matéria: {disciplina}</p>
      {/* .map e ul some e vira so essa linha agora, pois ta tudo dentro do arquivo listaRoteiros agora */}
          <ListaRoteiros roteiros = {roteirosFiltrados} />
    </main>
    ); 
  
}

// // serve para fora do return
// {/* */} serve para dentro do return