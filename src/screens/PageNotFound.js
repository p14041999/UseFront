import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Template from '../components/Template'

export default class PageNotFound extends Component {
    render() {
        return (
           <Template>
               <div className="h-100">
                <div className="h-100 row d-flex justify-content-center align-items-center me-0">
                    <div className="col-12 col-md-4 col-xl-3 pe-0">
                        <div className="card mx-2">
                            <div className="card-body p-5">
                                <h4 style={{color:'grey'}}>IMPORTANT</h4>
                                <p>The Page you are trying to go can not be found.</p>
                                <Link to="/"><button className="btn btn-primary">Back Home</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </Template>
        )
    }
}
