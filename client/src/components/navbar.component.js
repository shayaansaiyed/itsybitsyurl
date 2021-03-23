import { useEffect, useState } from 'react';

function Navbar(props){

    return(
        <div>
            <nav class="navbar navbar-dark bg-dark navbar-expand">
                <div class="container-fluid">
                    <h1><a class="navbar-brand h1" href="#">Itsy Bitsy URL</a></h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;