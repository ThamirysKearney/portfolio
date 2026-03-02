document.addEventListener("DOMContentLoaded", () => {

  // ── Animación de entrada en las cards ──
  document.querySelectorAll(".card").forEach((card, i) => {
    setTimeout(() => card.classList.add("show"), 150 + i * 80);
  });

  // ── Scroll suave en los enlaces de navegación ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const targetId = anchor.getAttribute("href");
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ── Abrir links de proyectos en pestaña nueva ──
  document.querySelectorAll(".project-grid a").forEach(link => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // ── Formulario de contacto con validación + envío a Formspree ──
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nombre  = document.getElementById("nombre");
  const correo  = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  // Muestra u oculta el mensaje de error de cada campo
  const showError = (field, errorId, hasError) => {
    const errorEl = document.getElementById(errorId);
    if (!errorEl) return;
    errorEl.style.display = hasError ? "block" : "none";
    hasError
      ? field.setAttribute("aria-invalid", "true")
      : field.removeAttribute("aria-invalid");
  };

  form.addEventListener("submit", async e => {
    e.preventDefault();

    // Validación
    let valid = true;

    const nombreOk = nombre.value.trim().length > 0;
    showError(nombre, "error-nombre", !nombreOk);
    if (!nombreOk) valid = false;

    const emailOk = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(correo.value.trim());
    showError(correo, "error-correo", !emailOk);
    if (!emailOk) valid = false;

    const mensajeOk = mensaje.value.trim().length > 0;
    showError(mensaje, "error-mensaje", !mensajeOk);
    if (!mensajeOk) valid = false;

    if (!valid) return;

    // Envío a Formspree vía fetch (sin redirección de página)
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.reset();
        submitBtn.textContent = "¡Mensaje enviado!";
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = "Enviar";
        }, 3000);
      } else {
        throw new Error("Error en el servidor");
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = "Error al enviar. Inténtalo de nuevo.";
      setTimeout(() => { submitBtn.textContent = "Enviar"; }, 3000);
    }
  });

});
