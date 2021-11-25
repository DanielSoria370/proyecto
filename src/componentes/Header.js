import React from 'react'

function Header() {
    return (
        <nav class="navbar static-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Series</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav navbar-right">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Series</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Peliculas</a>
                        </li>
                        
                        
                    </ul>
                </div>
        </div>
      </nav>
    )
}

export {Header}





