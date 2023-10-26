"use client";

import { useState } from "react";
import Modal from "./components/modal";
import { useFetch } from "./hooks/useFetch";

type Repository = {
  id: number;
  name: string;
  phone: string;
  email: string;
  contact_name: string;
  contact_phone: string;
  tshirt: string;
  vise: boolean;
  paid: boolean;
  economy_kit: boolean;

};

export default function Home() {
  const { data: repositories } = useFetch<Repository[]>("goal-2023/list");

  // LOGICA BUSCA
  const [busca, setBusca] = useState("");
  const buscaLowerCase = busca.toLowerCase()

  return (
    <div className="flex items-center justify-center w-full bg-slate-100 pt-16">

      <div className="grid items-center justify-center max-w-screen-2xl min-w-max ">
      <div className="flex items-center justify-start">
      <picture>
                  <img src="/logo.png" alt="" className="w-28 h-32" />
                  </picture>
</div>
<div className="flex items-center justify-center space-x-5">
<h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl font-extrabold">
          Inscritos no desafio 2023
        </h1>
                {/* INPUT BUSCA */}
    <div className="relative w-full flex flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" 
        placeholder="Busque um aluno..."
        onChange={(event) => setBusca(event.target.value)}
        value={busca} 
        />
    </div>
</div>
        



        

        
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-200">
            <tr className="border-b">
              <th className="px-2 py-6 text-sm text-center">Id</th>
              <th scope="col" className="px-2 py-3 text-center">
                Nome
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Telefone
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                E-mail
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Contato
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Tel. Contato
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Camiseta
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Viseira / Boné
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Valor
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Pagamento
              </th>
            </tr>
          </thead>
          {repositories?.filter((list) => {
            return busca.toLowerCase() === "" ? list : list.name.toLowerCase().includes(buscaLowerCase)
            || list.phone.toLowerCase().includes(buscaLowerCase)
            || list.email.toLowerCase().includes(buscaLowerCase)
            || list.contact_name.toLowerCase().includes(buscaLowerCase)
            || list.contact_phone.toLowerCase().includes(buscaLowerCase)
          }).map((list) => {
            {
              /*FUNÇÃO VISEIRA*/
            }
            function viseira() {
              if (list.vise && "true") {
                return (
                  <p className="text-sm font-semibold text-blue-500">Sim</p>
                );
              } else {
                return (
                  <p className="text-sm font-semibold text-red-500">Nao</p>
                );
              }
            }
            return (
              <tbody key={list.id}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="whitespace-nowrap px-2 py-4 text-sm text-center font-bold text-red-500">
                    {list.id}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 font-semibold">
                    {list.name}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4">{list.phone}</td>
                  <td className="whitespace-nowrap px-2 py-4 text-center">
                    {list.email}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4">
                    {list.contact_name}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4">
                    {list.contact_phone}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 text-center">
                    {list.tshirt}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 text-center">
                    {viseira()}
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 font-bold">
                
                  {/* LOGICA VALOR  */}
                  {list.economy_kit === false && list.vise === true ?
                  <p className="text-center font-bold">R$ 120,00</p> 
                  : list.economy_kit === false && list.vise === false ? 
                  <p className="text-center font-bold">R$ 100,00</p>
                  : list.economy_kit === true && list.vise === false ? 
                  <p className="text-center font-bold">R$ 80,00</p>  
                  : list.economy_kit === null && list.vise === false ? 
                  <p className="text-center font-bold">R$ 100,00</p>
                  : list.economy_kit === null && list.vise === true ? 
                  <p className="text-center font-bold">R$ 120,00</p>
                  : list.economy_kit === true && list.vise === true ? 
                  <p className="text-center font-bold">R$ 80,00</p>                       
                  :
                  <p>Error!</p>
                }
                  </td>
                  <td className="whitespace-nowrap px-2 py-4 text-center">
                    <button>
                      <Modal id={list.id} name={list.name} paid={list.paid} />
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
