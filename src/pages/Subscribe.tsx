import { useState, FormEvent } from "react";
import { gql, useMutation } from "@apollo/client";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";



export function Subscribe(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    const [ createSubscriber, { loading } ] = useCreateSubscriberMutation()

    function handleSubscribe(event: FormEvent){
        event.preventDefault();

        createSubscriber({
            variables: {
                name,
                email,
            }
        })
        //console.log(name, email)
    }


    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem]">
                        Contrua uma Aplicação com C# com WebForms EF e sqlserver
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil labore a dolorum nostrum voluptas.
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
                          className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 "
                        >
                            Garantir minha Vaga!
                        </button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/imgFundo.png" className="mt-10" alt="imgFundo" />
        </div>
    )
}