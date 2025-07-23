let datosFormulario = {};
function mostrarFormulario() {
  const form = document.getElementById("formularioContacto");
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
    form.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  } else {
    form.style.display = "none";
  }
}

function enviarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const interes = document.getElementById("interes").value;
  const mensaje = document.getElementById("mensaje").value.trim();
  if (!nombre || !correo) {
    alert("Por favor, completa al menos tu nombre y correo electrónico.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }
  datosFormulario = {
    nombre,
    correo,
    telefono,
    interes,
    mensaje
  };
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("interes").value = "";
  document.getElementById("mensaje").value = "";
  document.getElementById("formularioContacto").style.display = "none";
  mostrarModal();
}

function mostrarModal() {
  const modal = document.getElementById("modalExito");
  modal.style.display = "block";
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      cerrarModal();
    }
  });
}

function cerrarModal() {
  const modal = document.getElementById("modalExito");
  modal.style.display = "none";
}

function abrirWhatsApp() {
  let mensaje = `Hola, estoy interesado en el alimentador automático CuidaCan.%0A%0A`;
  mensaje += `Mi nombre es: ${datosFormulario.nombre}%0A`;
  mensaje += `Correo: ${datosFormulario.correo}%0A`;
  
  if (datosFormulario.telefono) {
    mensaje += `Teléfono: ${datosFormulario.telefono}%0A`;
  }
  
  if (datosFormulario.interes) {
    const intereses = {
      'compra': 'Quiero comprarlo',
      'info': 'Necesito más información',
      'precio': 'Consultar precio',
      'demo': 'Ver una demostración'
    };
    mensaje += `Me interesa: ${intereses[datosFormulario.interes]}%0A`;
  }
  
  if (datosFormulario.mensaje) {
    mensaje += `%0AMensaje adicional: ${datosFormulario.mensaje}`;
  }

  const url = `https://wa.me/593996079652?text=${mensaje}`;
  window.open(url, '_blank');
  cerrarModal();
}

function toggleFAQ(index) {
  const faqItems = document.querySelectorAll('.faq-item');
  const item = faqItems[index];
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');
  faqItems.forEach((otherItem, otherIndex) => {
    if (otherIndex !== index) {
      otherItem.classList.remove('active');
      otherItem.querySelector('.faq-answer').classList.remove('active');
    }
  });
  
  item.classList.toggle('active');
  answer.classList.toggle('active');
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.animated-element');
}