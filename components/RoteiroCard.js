import Link from "next/link";

export default function RoteiroCard(props){
    return (
        <li className="card">
            <span className="etiqueta">{props.roteiro.disciplina} - {props.roteiro.ano}º ano</span>     {/* Pegando o roteiro e a disciplina para ficarem bonitinhos no css */}
            <h3>    
                <Link href = {`/roteiro/${props.roteiro.id}`}>  {/* O href é o endereco para onde o link leva. Ja a crase e o $, servem para o texto mudar conforme o id do roteiro */}
                    {props.roteiro.titulo}
                </Link>
            </h3>
            <p>{props.roteiro.tempoEstimado} min de estudo</p>
        </li>  
    );
}