"use client"

import { useEffect, useState } from "react";
import Modal from "./components/modal";

type Repository = {
  id: string;
  name: string;
  phone: string;
  email: string
  contact_name: string
  contact_phone: string
  tshirt: string
  vise: string

}

export default function Home() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api3.aguiaassessoriaesportiva.com.br/goal-2023/list')
    .then(response => response.json())
    .then(data => {
      setRepositories(data);
    })
  }, [])

  return(

<div className="max-w-5xl w-full flex">


<table>

<thead>
          <tr>
          <th scope="col" className="py-4">Id</th>
          <th scope="col" className="py-4">Nome</th>
          <th scope="col" className="py-4">Telefone</th>
          <th scope="col" className="py-4">E-mail</th>
          <th scope="col" className="py-4">Nome Contato</th>
          <th scope="col" className="py-4">Telefone Contato</th>
          <th scope="col" className="py-4">Camiseta</th>
          <th scope="col" className="py-4">Viseira ou Boné</th>
          <th scope="col" className="py-4">Pagamento</th>
          <th scope="col" className="py-4">Confirmado</th>
          </tr>
        </thead>
  {repositories.map(list =>{
    return (
      <>
      <tbody>
      <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{list.id}</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{list.name}</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{list.phone}</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{list.email}</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{list.contact_name}</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{list.contact_phone}</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{list.tshirt}</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{list.vise}</td>
              <td className="whitespace-nowrap  px-6 py-4 font-medium">Confirmado</td>  
              <td className="whitespace-nowrap  px-6 py-4 font-medium">
              <button><Modal /></button>
              </td>
            </tr>
</tbody>
</>    
    )})}
</table>
</div>
  )
}