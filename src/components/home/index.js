import React from 'react'
import styles from './index.css'

const Home = () => {
  return (
    <div>
      <div>
        <h1>Puede buscar el lugar que quieras</h1>
      </div>
      <div>
        ¡Bienvenido!
      </div>
      <div>
        <div class="container">
          <div>
            <input
              type="browserslist"
              name="pais"
              placeholder="Pais"
            />
          </div>
          <div>
            <input
              type="text"
              name="Region"
              placeholder="Estado/Provincia"
            />
          </div>
          <div>
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
            />
          </div>
          <div>
            <input
              type="text"
              name="cod_postal"
              placeholder="Codigo Postal"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
