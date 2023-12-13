let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Técnica en Programación | Estudiante de Ingeniería en Entornos Virtuales y Negocios Digitales')
  .pauseFor(200)
  .deleteChars(10)
  .start();