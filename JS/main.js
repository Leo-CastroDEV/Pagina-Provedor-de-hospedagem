document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-contato");

  if (!form) {
    return;
  }

  const status = form.querySelector(".form-status");
  const nome = form.querySelector("#nome");
  const email = form.querySelector("#email");
  const assunto = form.querySelector("#assunto");
  const mensagem = form.querySelector("#mensagem");

  const mostrarStatus = (texto, tipo) => {
    status.textContent = texto;
    status.style.color = tipo === "erro" ? "#c0392b" : "#2f86d6";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      mostrarStatus(
        "Preencha os campos obrigatórios para enviar a mensagem.",
        "erro",
      );
      return;
    }

    const destinatario = "suporte@alfatech.com";
    const subject = encodeURIComponent(`[AlfaTech] ${assunto.value}`);
    const body = encodeURIComponent(
      `Nome: ${nome.value}\nE-mail: ${email.value}\nAssunto: ${assunto.value}\n\nMensagem:\n${mensagem.value}`,
    );

    window.location.href = `mailto:${destinatario}?subject=${subject}&body=${body}`;
    mostrarStatus(
      "Abrindo seu aplicativo de e-mail com a mensagem pronta.",
      "sucesso",
    );
    form.reset();
  });
});
