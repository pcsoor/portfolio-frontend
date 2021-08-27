import React from 'react'
import { useHistory } from 'react-router-dom';

function PageNotFound() {
    const history = useHistory();

    return (
        <div>
            <div className="bg-gray-100 h-100 justify-center">
                <center class="m-auto">
            
                <div class=" tracking-widest"><br />
                <span class="text-gray-500 text-6xl block"><span>4  0  4</span></span><br />
                <span class="text-gray-500 text-xl block">Sorry, We couldn't find what you are looking for!</span>

                </div>
                </center>
                <center class="py-6">
                    <a href="/" class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Home page</a>
                </center>
            </div>
        </div>
    )
}

export default PageNotFound;
