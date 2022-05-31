import './App.css';
import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio 
          nombre='Eduardo Cervantes'
          pais='México'
          imagen='cervantes'
          cargo='Estudiante'
          empresa='Euro'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam mi, dapibus vitae gravida vel, venenatis ac lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut volutpat tellus. Quisque eget eleifend tellus. Sed accumsan nibh elit, et malesuada nisi fringilla sit amet. Cras sit amet libero sapien. Etiam viverra hendrerit purus, ut ornare quam pellentesque et. Aliquam vel felis consequat, vehicula lorem ultricies, accumsan tortor. Vestibulum eu fermentum est. Morbi sem orci, congue sit amet lacinia vel, tincidunt et lorem. Nam rhoncus faucibus velit, non bibendum purus fermentum rhoncus. ' />
        <Testimonio
          nombre='Jair Cid Pale'
          pais='México'
          imagen='jair'
          cargo='Estudiante'
          empresa='Euro'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam mi, dapibus vitae gravida vel, venenatis ac lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut volutpat tellus. Quisque eget eleifend tellus. Sed accumsan nibh elit, et malesuada nisi fringilla sit amet. Cras sit amet libero sapien. Etiam viverra hendrerit purus, ut ornare quam pellentesque et. Aliquam vel felis consequat, vehicula lorem ultricies, accumsan tortor. Vestibulum eu fermentum est. Morbi sem orci, congue sit amet lacinia vel, tincidunt et lorem. Nam rhoncus faucibus velit, non bibendum purus fermentum rhoncus. ' />
        <Testimonio
          nombre='Jabith Dominguez'
          pais='México'
          imagen='jabith'
          cargo='Estudiante'
          empresa='Euro'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam mi, dapibus vitae gravida vel, venenatis ac lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut volutpat tellus. Quisque eget eleifend tellus. Sed accumsan nibh elit, et malesuada nisi fringilla sit amet. Cras sit amet libero sapien. Etiam viverra hendrerit purus, ut ornare quam pellentesque et. Aliquam vel felis consequat, vehicula lorem ultricies, accumsan tortor. Vestibulum eu fermentum est. Morbi sem orci, congue sit amet lacinia vel, tincidunt et lorem. Nam rhoncus faucibus velit, non bibendum purus fermentum rhoncus. ' />
      </div>
    </div>
  );
}

export default App;
