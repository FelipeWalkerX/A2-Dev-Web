import Link from "next/link";

export default function Cabecalho(props){
    return(
        <header>
            <h1>
                {props.titulo}
            </h1>
            <nav>
                <Link href = "/">Roteiros</Link> | <Link href = "/sugerir">Sugerir roteiro</Link>
            </nav>
        </header>
    );
}