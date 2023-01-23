let miNombre = "Diego";
let miApellido = "Bertoli";
let estudiante = miNombre.concat(" ").concat(miApellido);

// todo mayusculas y todo minusculas
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

//numero de letras con espacio, ni idea porque es undefined -- era porque puse lenght
const letrasEstudiante = estudiante.length


//primera letra nombre y ultima letra apellido
let primeraLetraNmbr = miNombre.charAt(0);
let ultimaLetraApll = miApellido[miApellido.length - 1];

//eliminar espacios
let eliminarEspacios = estudiante.replace(/ /g, "");

console.log(eliminarEspacios)
//booleano si nombre està en estudiante
let booleano = estudiante.includes(miNombre);
