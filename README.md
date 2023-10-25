Wxemplo de chamada para update

async function handleSubmit(e) {
e.preventDefault();

    if (confirm("Deseja confirmar o pagamento?") === true) {
      try {
        await api.patch(`/goal2022/${id}`, {
          paid: "SIM",
        });
        alert("pagamento registrado");

        Router.push("/dashboard");
        // toast({
        //   title: "Zona de treino atualizada :)",
        //   status: "success",
        //   position: "top-right",
        //   variant: "subtle",
        //   duration: 1500,
        //   isClosable: true,
        // });
      } catch (err) {
        // toast({
        //   title: "Erro ao atualizar a zona de treino :(",
        //   status: "error",
        //   position: "top-right",
        //   variant: "subtle",
        //   duration: 1500,
        //   isClosable: true,
        // });
      }
    } else {
      return false;
    }

}
