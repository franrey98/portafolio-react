import { Link } from 'react-router-dom'

const RouteError = () => {
    return (
        <div>
            <h1>La pagina no existe todavia</h1>
            <Link to='/'> Volver a inicio</Link>
        </div>
    )
}

export default RouteError