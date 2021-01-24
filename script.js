document
  .getElementById("botaoEnviar")
  .addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""
  ) {
    alert("Prontinho! Agora você receberá as novidades por e-mail :)");
  } else {
    alert("Ops! Por favor, preencha os campos nome, e-mail e telefone.");
  }
}
