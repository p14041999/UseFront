import React, { Component } from 'react';
import { register } from '../apis/User';
import { UserContext } from '../context/UserContext';
import heroImage from './hero.svg';

export default class Hero extends Component {
    static contextType = UserContext;
    name = React.createRef();
    email = React.createRef();
    password = React.createRef();
    c_password = React.createRef();
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.state = {
            err:'',
        }
    }
    async register(e){
        e.preventDefault();
        this.setState({err:''});
        // console.log(this.name.current.value);
        //// Check if both passwords are same
        if(this.password.current.value === this.c_password.current.value){
            try{
                let res = await register(this.name.current.value,this.email.current.value,this.password.current.value,localStorage.getItem('ref'));
                await this.context.login(res.token);
            }catch(e){
                console.log(e);
            }
        }else{

        }
    }

    render() {
        return (
           <div className="container">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={heroImage} className="img-fluid" alt="Hero"/>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-end">
                            <div className="card w-100 w-sm-auto py-3 bg-transparent border-0 max-defination">
                                <div className="card-body text-center border rounded p-5" style={{backdropFilter:"blur(20px)",backgroundColor:"#FCFCFE96",flex:'none'}}>
                                    <h5 className="mb-5">Register for Airdrop</h5>
                                    <form onSubmit={(event)=>{this.register(event)}}>
                                        <div class="form-floating mb-3 mt-3 mt-sm-5">
                                            <input ref={this.name} type="text" class="form-control bg-transparent" id="floatingInputName" placeholder="Jhon Doe" />
                                            <label for="floatingInput">Name</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input ref={this.email} type="email" class="form-control bg-transparent" id="floatingInputEmail" placeholder="name@example.com" />
                                            <label for="floatingInput">Email</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input ref={this.password} type="password" class="form-control bg-transparent" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input ref={this.c_password} type="password" class="form-control bg-transparent" id="floatingConfirmPassword" placeholder="Password" />
                                            <label for="floatingPassword">Confirm Password</label>
                                        </div>
                                        <div class="form-floating">
                                            <button className="btn btn-primary w-100 py-3"> Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
           </div>
        )
    }
}
