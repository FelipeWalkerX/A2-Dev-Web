import roteitos from "@/data/roteiros.json"

export function generateStaticParams(){     //Diz pro build quais id's do roteiro vao virar pagina
    return roteitos.map((roteiro) => ({id: String(roteiro.id)}));   //.map passa por todo mundo do roteiro, nesse caso, todos os id
}

export default async function PaginaRoteiro(props) {
    const params = await props.params;  //Espera o Next entregar o id do endereco para comecar os trabalhos 
    return(
        <h1>
            Roteiro {params.id}     {/* Fala qual id pertence a pagina */}
        </h1>

    )
}