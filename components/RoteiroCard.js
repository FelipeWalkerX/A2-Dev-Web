import Link from "next/link";

export default function RoteiroCard(props){
    return (
        <li className="card">
            <Link href = {`/roteiro/${props.roteiro.id}`}>  {/* O href é o endereco para onde o link leva. Ja a crase e o $, servem para o texto mudar conforme o id do roteiro */}
                {props.roteiro.titulo} - {props.roteiro.disciplina}, {props.roteiro.ano}º ano
            </Link>
        </li>  
    );
}