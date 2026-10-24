import roteiros from "@/data/roteiros.json"
import Link from "next/link";
import { notFound } from "next/navigation";
import professores from "@/data/professores.json"
import InfoAutor from "@/components/seloIA";

export function generateStaticParams(){     //Diz pro build quais id's do roteiro vao virar pagina
    return roteiros.map((roteiro) => ({id: String(roteiro.id)}));   //.map passa por todo mundo do roteiro, nesse caso, todos os id
}

export default async function PaginaRoteiro(props) {
    const params = await props.params;  //Espera o Next entregar o id do endereco para comecar os trabalhos 
    const roteiro = roteiros.find((roteiro) => String(roteiro.id) === params.id);   //Acha o primeiro que o id do roteiro seja igual ao id do endereco da pagina
    
    if(!roteiro){   //Se nao achar nenhuma id do roteiro compativel com o do endereco
        notFound(); //Ele da erro e fala que nao foi encontrado
    }
    
    const professor = professores.find((professor) => professor.id === roteiro.professorId)     //Na lista dos professores, acha o id que é igual o professorId

    return(
        <main>
            <h1>
                {roteiro.titulo}     {/* Assim que bateu o id do roteiro com o id da pagina, ele ja puxa tudo, nesse caso, foi colocado de titulo da pagina o titulo do roteiro em questao */}
            </h1>
            <p>
                {/* E depois, a disciplina e o ano como paragrafos */}
                {roteiro.disciplina} - {roteiro.ano}º ano
            </p>
            <p> Tempo estimado: {roteiro.tempoEstimado} minutos</p>    
            <p> Sobre o tema: {roteiro.explicacao}</p>
            
            <h2>
                <br /> Questões:
            </h2>
            <ol>    {/* <ol> cria uma lista ordenada */}
                {roteiro.questoes.map((questao, posicao) =>(
                    <li key = {posicao}>{questao.pergunta} <br /> 
                    Resposta: {questao.resposta} <br />
                    <br /> </li>
                    
                ))}
            </ol>
            <InfoAutor professor = {professor} />
            <p>
                <Link href = "/">
                    Voltar para a lista
                </Link>
            </p>
        </main> 
    )
}

//<br /> serve como se fosse um \n, ou seja, pra quebrar linha e nao precisar ficar dando 5 milhoes de <p></p>