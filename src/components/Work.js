import React from 'react'
import {Link} from 'react-router-dom'

export default function Work() {
    return (
        <div>
            <h1>My Work component</h1>
            {
                localStorage.getItem('user-info') ? 
                <>
                    <div className="max-w-md bg-white rounded-xl  mx-auto shadow-md px-3 py-6">
                        <h3 className="font-semibold text-xl pb-1 text-center">What would you like to do?</h3>
                        <h3 className="font-semibold mt-4">Manage projects</h3>
                        <Link to="/add-project">Add project</Link><br />
                        <Link to="/update-project">Update project</Link>

                        <h3 className="font-semibold mt-4">Manage technologies</h3>
                        <Link to="/add-project">Add technology</Link><br />
                        <Link to="/update-project">Update technology</Link>

                        <h3 className="font-semibold mt-4">Manage categories</h3>
                        <Link to="/add-project">Add category</Link><br />
                        <Link to="/update-project">Update category</Link>
                    </div>
                    
                </>
                : null
                
            }
        </div>
    )
}
