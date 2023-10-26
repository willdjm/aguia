import { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL:'https://api3.aguiaassessoriaesportiva.com.br/'
})

export default function Modal({ id, name, paid }: any) {
  const [showModal, setShowModal] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    
          try {
            await api.patch(`/goal-2023/${id}`, {
              paid: 1,
            });
            alert("pagamento registrado");
            setShowModal(false)
            window.location.reload()
          } catch (err) {
            console.log(err);
          }
    }

  return (
    <>
      {/*BOTÃO ABRIR MODAL*/}
      {paid === true ?       
      
      <button
        className="block text-white bg-green-600 cursor-not-allowed font-medium rounded-lg text-sm px-2 py-2.5 text-center opacity-50"
        type="button"
      >
        Pagamento Confirmado
      </button> :       <button
        className="block text-white bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Confirmar Pagamento
      </button>
      } 
      

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {/*BOX MODAL*/}
            <div className="relative w-full  mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*HEADER MODAL*/}
                <div className="flex items-center justify-center p-5 border-b border-solid ">
                  <picture>
                  <img src="/logo.png" alt="" className="w-20 h-24" />
                  </picture>
                </div>

                {/*BODY MODAL*/}
                <div className="relative flex-auto">
                  <p className="text-black text-xl py-3">
                    Deseja confirmar o pagamento?
                  </p>
                  <p className="text-xl font-semibold text-red-500">{name}</p>
                </div>

                {/*FOOTER MODAL / BOTÕES */}
                <div className="flex items-center justify-center p-5 border-b border-solid gap-6">
                  {/*BOTÃO CANCELAR*/}
                  <button
                    type="button"
                    className="text-gray-500 bg-white rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white hover:bg-red-400 focus:z-10"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>

                  {/*BOTÃO CONFIRMAR*/}
                  <button
                    type="button"
                    className="text-white bg-emerald-500 hover:bg-emerald-400 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    onClick={handleSubmit}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*FUNDO MODAL*/}
          <div className="opacity-80 fixed inset-0 z-40 bg-slate-200"></div>
        </>
      ) : null}
    </>
  );
}
