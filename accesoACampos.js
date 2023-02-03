document.forms[0].addEventListener('submit',mostrarDatos);

document.forms[0].addEventListener('button',mostrarDatos);

    function mostrarDatos(event)
    {
      event.preventDefault();
      const parrafo = document.createElement("p");
      const form = event.target;
        for (let i = 0; i < form.elements.length; i++) 
        {
          const element = form.elements[i];
          parrafo.append(element.name + "\n"+ ": " + element.value + " "+ "\n");
        }
      // Agrega el párrafo a otro elemento en la página HTML
      document.body.append(parrafo);
    };
    const formu = document.forms[0];
const inputs = document.querySelectorAll('input');

formu.addEventListener('submit', (event) => {
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value) {
      isValid = false;
      input.classList.add('invalid');
      input.focus();
      alert(`Por favor, rellena el campo ${input.name}.`);
    } else {
      input.classList.remove('invalid');
    }
  });

  if (!isValid) {
    event.preventDefault();
  }
});
    const fileInput = document.getElementById("myFile");
    const fileName = fileInput.value.split("\\").pop();
    