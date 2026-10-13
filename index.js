import { RepositorioTareas } from './modelos/RepositorioTareas.js';
import { ServicioTareas } from './servicios/ServicioTareas.js';
import { mostrarMenuPrincipal } from './menus/menuPrincipal.js';

function principal() {
    // Instanciación de objetos usando funciones constructoras y el operador 'new'
    const repositorio = new RepositorioTareas();
    const servicioTareas = new ServicioTareas(repositorio);

    // Inicia el flujo principal enviando los mensajes correspondientes
    mostrarMenuPrincipal(servicioTareas);
}

principal();
