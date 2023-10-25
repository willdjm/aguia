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

      } catch (err) {

      }
    } else {
      return false;
    }
}
