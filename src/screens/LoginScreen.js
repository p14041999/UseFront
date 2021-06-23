import React, { Component } from 'react'
import Template from '../components/Template'
import heroImage from '../components/hero.svg';
import { Link } from 'react-router-dom';
import { login } from '../apis/User';
import { UserContext } from '../context/UserContext';
export default class LoginScreen extends Component {
    static contextType=UserContext;
    email = React.createRef();
    password = React.createRef();

    constructor(props){
        super(props)
        this.login = this.login.bind(this);
    }

    async login(e){
        e.preventDefault();
        try{
            let res = await login(this.email.current.value,this.password.current.value);
            if(res.success){
                await this.context.login(res.token);
            }else{
                console.log(res.message);
            }
        }catch(e){
            console.log(e);
        }
    }
    render() {
        return (
            <Template>
                <div className="container">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={heroImage} className="img-fluid" alt="Hero"/>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-end">
                            <div className="card w-100 w-sm-auto py-3 bg-transparent border-0 max-defination">
                                <div className="card-body text-center border rounded p-5" style={{backdropFilter:"blur(20px)",backgroundColor:"#FCFCFE96",flex:'none'}}>
                                    <h5 className="mb-5">Login to Access</h5>
                                    <form onSubmit={(event)=>{this.login(event)}}>
                                        <div class="form-floating mb-3">
                                            <input ref={this.email} type="email" class="form-control bg-transparent" id="floatingInputEmail" placeholder="name@example.com" />
                                            <label for="floatingInput">Email</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input ref={this.password} type="password" class="form-control bg-transparent" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <button className="btn btn-primary w-100 py-3"> Login</button>
                                        </div>
                                        <div class="form-floating">
                                            <Link to="/">Don't have a Account? Register</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Template>
        )
    }
}
