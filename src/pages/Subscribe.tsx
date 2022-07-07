import { useState, FormEvent } from "react";
import { gql, useMutation } from "@apollo/client";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { useNavigate } from "react-router-dom";



export function Subscribe(){

    const navigate = useNavigate() 

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    const [ createSubscriber, { loading } ] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent){
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
        //console.log(name, email)
    }


    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem]">
                        Construa uma Aplicação com C#, WebForms, EF e sqlserver
                    </h1>
                    <p>
                    Projeto utilizando WebForms C# com SQL Server
                    Entity Framework
                    Html
                    Api Correios - Consulta CEP
                    Enviador de Email
                    
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block"> Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} action="" className=" flex flex-col gap-2 w-full ">
                        <input
                         className="bg-gray-900 rounded px-5 h-14"
                         type="text"
                         placeholder="Seu nome Completo" 
                         onChange={ event => setName(event.target.value)}
                        />
                        <input
                         className="bg-gray-900 rounded px-5 h-14"
                         type="text"
                         placeholder="Digite seu Email" 
                         onChange={ event => setEmail(event.target.value)}
                        />

                        <button 
                          type="submit"
                          disabled={loading}
                          className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 hover:text-gray-500 transition-colors disabled:opacity-50 "
                        >
                            Garantir minha Vaga!
                        </button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}