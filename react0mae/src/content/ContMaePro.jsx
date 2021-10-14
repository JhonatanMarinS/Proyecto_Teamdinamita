import lupa from '../media/lupa.jpg'
function ContMaePro () {
    return(
        <body>
        <div className="n"> 
        <a href="#" title="Ir arriba">
            <input type="submit" value="Ir arriba" className="botton" style='position:fixed;bottom:0;right:0;'/>
        </a> 
    </div> 
    
    
        <img src={lupa} className='imagen'/>
        
 
<div className="input-contenedor">
    <p className="p"> Mis Productos y Servicios</p>
    <div className="objetos">
        <table className="tabla">
            
            <tr>
                   <td><i className="fas fa-arrow-alt-circle-right icon"></i> Tipo de Productos y Servicios</td>      
                   <td>
                    <a className="button" style="font-size: 15px;" href="V02.html"  target="_blank">
                        <span className="fas fa-arrow-alt-circle-right icon"></span></a><label>Productos</label></td>
                        
                       
                   <td><i className="fas fa-arrow-alt-circle-right icon"></i>  Servicios</td>      
            
            </tr>
            <tr className="objetos">
                     <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Stock</td>      
                     <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Descuentos</td>      
             </tr>
    
          </table>
        </div>
        <p className="p"> Mi Empresa</p>
        <div className="objetos">
            <table className="tabla">
              <tr className="objetos">
                     <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Configuración General</td>      
                     <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Sucursal</td>      
                     <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Usuario</td>      
              
              </tr>
              <tr className="objetos">
                     <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Perfil de Acceso</td>      
                
               </tr>
            </table> 
        </div>   
        <p className="p"> Mis Ventas</p>
        
            <div className="objetos">
                <table className="tabla">
                <tr className="objetos">
                    <td><a className="button" style="font-size: 15px;" href="Inter_Sis_Vent.html"  target="_blank">
                        <span className="fas fa-arrow-alt-circle-right icon"></span></a><label>Sistemas de Ventas</label></td>
                         <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Renovación</td>      
                         <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Formas de Pago</td>      
                
                </tr>
                <tr className="objetos">
                         <td><i className="fas fa-arrow-alt-circle-right icon"></i>   Tipo de Documento</td>      
                  
                 </tr>
              </table>     
            </div> 
        </div>
    </body>
    )
}
export default ContMaePro