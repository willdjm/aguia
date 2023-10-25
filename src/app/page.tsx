"use client"

import Modal from "./components/modal";
import { useFetch } from "./hooks/useFetch";

type Repository = {
  id: number;
  name: string;
  phone: string;
  email: string
  contact_name: string
  contact_phone: string
  tshirt: string
  vise: 'true' | 'false'

}

export default function Home() {
  const { data: repositories } = 
  useFetch<Repository[]>('goal-2023/list')

  return (

    <div className="flex items-center justify-center w-full">

      <div className="grid items-center justify-center max-w-screen-2xl w-full py-16">
        <h1 className="flex items-center justify-center text-center text-4xl font-medium py-5">Cadastro Alunos</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="border-b">
              <th className="px-2 py-3">Id</th>
                <th scope="col" className="px-2 py-3">Nome</th>
                <th scope="col" className="px-2 py-3">Telefone</th>
                <th scope="col" className="px-2 py-3">E-mail</th>
                <th scope="col" className="px-2 py-3">Nome Contato</th>
                <th scope="col" className="px-2 py-3">Telefone Contato</th>
                <th scope="col" className="px-2 py-3">Camiseta</th>
                <th scope="col" className="px-2 py-3">Viseira ou Boné</th>
                <th scope="col" className="px-2 py-3">Valor</th>
                <th scope="col" className="px-2 py-3">Confirmação de Pagamento</th>
              </tr>
          </thead>
          {repositories?.map(list => {
            return (

              <tbody key={list.id}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="whitespace-nowrap px-2 py-4 font-medium text-red-500">{list.id}</td>
                  <td className="whitespace-nowrap px-2 py-4 font-semibold">{list.name}</td>
                  <td className="whitespace-nowrap px-2 py-4">{list.phone}</td>
                  <td className="whitespace-nowrap px-2 py-4">{list.email}</td>
                  <td className="whitespace-nowrap px-2 py-4">{list.contact_name}</td>
                  <td className="whitespace-nowrap px-2 py-4">{list.contact_phone}</td>
                  <td className="whitespace-nowrap px-2 py-4">{list.tshirt}</td>
                  <td className="whitespace-nowrap px-2 py-4">{list.vise}</td>
                  <td className="whitespace-nowrap px-2 py-4 text-emerald-500">Confirmado</td>
                  <td className="whitespace-nowrap px-2 py-4">
                    <button><Modal /></button>
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
