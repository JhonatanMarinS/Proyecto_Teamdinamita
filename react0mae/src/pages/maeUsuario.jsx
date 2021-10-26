import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lupa from '../media/lupa.jpg'
import { faFingerprint, faIdCard, faNetworkWired, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
//<a href="#" title="Ir arriba">
//<input type="submit" value="Ir arriba" className="bootton" styles='position:fixed;bottom:0;right:0;'/>
//</a>


const MaestroUsuario = () =>{
    return(
        <body>
        <div className='imagen2'>
            <img src={lupa} width="500"/>
            </div>
            <div className="n"> 
            
        </div>
        <br/>
<br/>
<br/>
<table className="table">
<th><h6>Maestro de Usuario</h6></th>
<th><div id='hiper' className='hiper'><a href="#openModal">+Nuevo Usuario</a></div>
   </th>
</table>
<div id="openModal" className="modalDialog">
	<div>
		<a href="#close" title="Close" className="close">X</a>

        <form className="formulario">
            <h2>Registro</h2>
            <h3>Nuevo Usuario</h3>
            <div className='encerrado2'>
                <div className="imput-con">
                    <FontAwesomeIcon className="icon" icon2={ faFingerprint }/>ID Usuario:<input type='text'/>
                    
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon" icon2={ faIdCard }/>
                    <label>Nombre:</label>
                    <input type='text'/>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon" icon2={ faNetworkWired }/>
                    <label>Rol:</label>
                    <input type='text'/>
                 
                </div>
                <div className="imput-con">
                     <FontAwesomeIcon className="icon" icon2={ faQuestionCircle }/>
                    <label>Estado:</label>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                         <label for="html">Autorizado</label>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                         <label for="css">No Autorizado</label>
                          
                 
                </div>

                
                
                <a><input type='sumit' value='Guardar' className="botton"/></a>
                <p>Antes de salir, recuerda verificar el contenido ingresado</p>
                 
            </div>
        
        </form>
        </div>
</div>

<div id="openModal2" className="modalDialog">
	
		<a href="#close" title="Close" className="close">X</a>
        
		
        <form className="formulario">
            <h2>Registro</h2>
            <h3>Modificar Datos</h3>
            <div className='encerrado2'>
                <div className="imput-con">
                    <FontAwesomeIcon className="icon" icon2={ faFingerprint }/>ID Usuario:<input type='text'/>
                    
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon" icon2={ faIdCard }/>
                    <label>Nombre:</label>
                    <input type='text'/>
                 
                </div>

                <div className="imput-con">
                     <FontAwesomeIcon className="icon" icon2={ faNetworkWired }/>
                    <label>Rol:</label>
                    <input type='text'/>
                 
                </div>
                <div className="imput-con">
                     <FontAwesomeIcon className="icon" icon2={ faQuestionCircle }/>
                    <label>Estado:</label>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                         <label for="html">Autorizado</label>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                         <label for="css">No Autorizado</label>
                    <input type="radio" id="ss" name="fav_language" value="SS"/>
                         <label for="ss">Pendiente</label>
                          
                 
                </div>

                
                
                <a><input type='sumit' value='Guardar' className="botton"/></a>
                <p>Antes de salir, recuerda verificar el contenido ingresado</p>
                 
            </div>
        
        </form>
        </div>

        <div id='L' className='L'>
<ul>
    <li><a href="#" className='l2'>ID Usuario</a></li>
    <li><a  href="#" className='l2'>Nombre Usuario</a></li>
    <li><a href="#" className='l2'>Rol Usuario</a></li>
    <li><a href="#" className='l2'>Estado</a></li>
    <FontAwesomeIcon className="icon" icon2={ faUserCircle }/>
    <li><a href="#" className='l2'>Acción</a></li>
  </ul>
</div>
<div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>1001021219</a></li>
        <li><a  href="#" className='l3'>Camila Parada</a></li>
        <li><a href="#" className='l3'>Vendedor Mr.</a></li>
        <li><a href="#" className='l3'>Autorizado</a></li>
        <FontAwesomeIcon className="icon" icon3={ faUserCircle }/>
        
        <li><a href="#openModal2" className='l3' styles='color:rgb(59,59,247)'><u>  Editar</u></a></li>
        <a href="#openModal3" className='l3' styles='color:rgb(59,59,247)'><u>Eliminar Usuario</u></a>
      </ul>
    </div>

    <div id='lis2' className='lis2'>
    <ul>
        <li><a href="#" className='l4'>1001021218</a></li>
        <li><a  href="#" className='l4'>Valentina Villán</a></li>
        <li><a href="#" className='l4'>Gerente</a></li>
        <li><a href="#" className='l4'>Autorizado</a></li>
        <FontAwesomeIcon className="icon" icon3={ faUserCircle }/>
        
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
        <br/><a href="#openModal3" className='l4' styles='color:rgb(59,59,247)'><u>Eliminar Usuario</u></a>
      </ul>
    </div>

    <div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>1001021217</a></li>
        <li><a  href="#" className='l3'>Sindy Naranjo</a></li>
        <li><a href="#" className='l3'>Vendedor Mr.</a></li>
        <li><a href="#" className='l3'>No Autorizado</a></li>
        <FontAwesomeIcon className="icon" icon3={ faUserCircle }/>
        
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
        <br/><a href="#openModal3" className='l4' styles='color:rgb(59,59,247)'><u>Eliminar Usuario</u></a>
      </ul>
    </div>

    <div id='lis2' className='lis2'>
    <ul>
        <li><a href="#" className='l4'>1001021216</a></li>
        <li><a  href="#" className='l4'>Brian Zuleta</a></li>
        <li><a href="#" className='l4'>Vendedor Jr.</a></li>
        <li><a href="#" className='l4'>Autorizado</a></li>
        <FontAwesomeIcon className="icon" icon3={ faUserCircle }/>
        
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
        <li><a href="#openModal3" className='l4' styles='color:rgb(59,59,247)'><u>Eliminar Usuario</u></a></li>
      </ul>
    </div>
    <div id='lis' className='lis'>
    <ul>
        <li><a href="#" className='l3'>1001021216</a></li>
        <li><a  href="#" className='l3'>Jhonatan Marin</a></li>
        <li><a href="#" className='l3'>Jefe Bodega</a></li>
        <li><a href="#" className='l3'>Pendiente</a></li>
        <FontAwesomeIcon className="icon" icon3={ faUserCircle }/>
        
        <li><a href="#openModal" className='l4' styles='color:rgb(59,59,247)'><u>Editar</u></a></li>
        <li><a href="#openModal3" className='l4' styles='color:rgb(59,59,247)'><u>Eliminar Usuario</u></a></li>
      </ul>
    </div>


    </body>
    )
}

export default MaestroUsuario