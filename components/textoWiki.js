"use client"
import { useState, useEffect } from "react"

export default function TextoWiki(props)    {
    const [estado, setEstado] = useState("carregando");
    const [resumo, setResumo] = useState("");
    const [link, setLink] = useState("");

    useEffect(() =>{
        async function buscar (){   //Tenta buscar a pagina
            try{        // Try/catch para ver se acha a pagina na api
                const resposta = await fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${props.tema}`);    //Tenta buscar essa pagina
                if(!resposta.ok){   //Se nao achar o tema
                    throw new Error("A API respondeu com erro");        //Vai direto pro catch com a mensagem que deu ruim
                }
                const dados = await resposta.json();    //Se achou, prepara para pegar os dados do json
                setResumo(dados.extract);       //Pega os dados do extract do json da api
                setLink(dados.content_urls.desktop.page);   // Pega a url da pagina principal caso o aluno tenha mais duvidas sobre o assunto
                setEstado("sucesso");       //E guarda que deu bom
            }
            catch (erro){       //Se deu BO na busca
                setEstado("erro");      //Guarda que deu ruim
            }
        }
        buscar();
    }, [props.tema]);

    if (estado === "carregando"){       //Se ele tiver procurando
        return <p> Carregando resumo, aguarde... </p>   //Retorna isso
    }
    if (estado === "erro"){         //Se ele nao achou
        return <p> Não foi possível localizar o resumo </p>     //Retorna isso
    }
    return(
        <div>
            <p>{resumo}</p>      {/*Se deu tudo certo, ele retorna o resumo da api*/}
            <a href = {link} target = "_blank"> Ler mais na Wikipédia</a>
        </div>
    );
}