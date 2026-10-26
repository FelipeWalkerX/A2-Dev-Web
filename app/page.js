"use client";
import { useState } from "react"

// Importando os roteiros
import roteiros from "@/data/roteiros.json"
import Cabecalho from "@/components/cabecalho"
import ListaRoteiros from "@/components/listaRoteiros";
import Filtro from "@/components/filtro";


export default function Home() {
  const [disciplina, setDisciplina] = useState("");
  const [ano, setAno] = useState("");    //É o filtro

  //filter funciona como um for e um if junto
  const roteirosFiltrados = roteiros.filter((roteiro) => 
    (disciplina === "" || roteiro.disciplina === disciplina) && 
    (ano === "" || roteiro.ano === ano));  //Ele funciona como um for e um if junto
  return (
    <main>  
      {/* <h1> é o titulo */}
      <Cabecalho titulo = "Plataforma de Roteiros"/>
      {/* <p> é o texto normal */}
      <p className="nRoteirosDisp"> 
        Temos {roteiros.length} roteiros disponíveis  
      </p>  
      {/*Filtro da disciplina*/}
      <Filtro 
        disciplina = {disciplina} 
        setDisciplina = {setDisciplina}
        ano = {ano}
        setAno = {setAno}
      />
      {/* .map e ul some e vira so essa linha agora, pois ta tudo dentro do arquivo listaRoteiros agora */}
          <ListaRoteiros roteiros = {roteirosFiltrados} />

    </main>
    ); 
  
}

// // serve para fora do return
// {/* */} serve para dentro do return