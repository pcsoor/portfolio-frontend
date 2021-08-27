import React from 'react'
import {Link} from 'react-router-dom'

export default function Work() {
    return (
        <div>
            <h1>My Work component</h1>
            {
                localStorage.getItem('user-info') ? 
                <>
                    <h3>Manage projects</h3>
                    <Link to="/add-project">Add project</Link>
                    <Link to="/update-project">Update project</Link>

                    <h3>Manage technologies</h3>
                    <Link to="/add-project">Add technology</Link>
                    <Link to="/update-project">Update technology</Link>

                    <h3>Manage categories</h3>
                    <Link to="/add-project">Add category</Link>
                    <Link to="/update-project">Update category</Link>
                </>
                :
                <>
                </>
            }
        </div>
    )
}
