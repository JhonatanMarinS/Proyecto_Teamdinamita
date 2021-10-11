const Header =()  => {
    return (
        <header> 
            <div className="encabezado">
                <h1>Nombre de la empresa</h1>
            </div>

            <div className="menu" id="menu">
        
            
                <ul>
                <li><a href="#">Mi Empresa</a></li>
                <li><a href="#">Mis Productos y Servicios</a>
                
                <ul>
                    <li><a href="#">Tipo de producto o servicio</a></li>
                    <li><a className="link" href="V02.html"  target="_blank">Productos</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Descuentos</a></li>
                    <li><a href="#">Stock</a></li>
                </ul>
                
                </li>
                <li><a href="#">Mis ventas</a>
                    // start me
                <ul>
                    <li><a className="link" href="Inter_Sis_Vent.html"  target="_blank">Sistema de Ventas</a></li>
                    <li><a href="#">Renovación</a></li>
                    <li><a href="#">Formas de Pago</a></li>
                    <li><a href="#">Tipo de Documento</a></li>
                </ul>
                
                </li>
                <li><a href="#">Punto de venta</a></li>
                <li><a href="#">Reportes</a></li>

                </ul>
    
                </div>

        </header>
    )
}
export default Header;