import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { verifyMail } from '../apis/User';
import Template from '../components/Template';
import { UserContext } from '../context/UserContext';

export default class VerifyEmailScreen extends Component {
    static contextType = UserContext
    state={
        isVerified:false,
        isError:false,
        msg:''
    }
    componentDidMount(){
        let phrase = this.props.match.params.phrase;
        verifyMail(phrase).then(async (res)=>{
            if(res.success === false){
                this.setState({isError:true,msg:res.message});
            }else{
                await this.context.login(res.token);
                this.setState({isVerified:true});
            }
        })
    }
    render() {
        
            if(this.state.isVerified){
                return (
                    <Redirect to="/" />
                )            
            }else{
                return (
                    <Template>
                        <div className="h-100">
                            <div className="h-100 row d-flex justify-content-center align-items-center me-0">
                                <div className="col-12 col-md-4 col-xl-3 pe-0">
                                    <div className="card mx-2">
                                        <div className="card-body p-5">
                                            
                                            {!this.state.isError?<h4 style={{color:'grey'}}>Please Wait!</h4>:<h4 style={{color:'grey'}}>Important!</h4>}
                                            {!this.state.isError?<p>Verifing your mail at the moment</p>:<p>{this.state.msg}</p>}
                                            {!this.state.isError?<></>:<Link to="/"><button className="btn btn-primary">Back to home</button></Link>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Template>
                )
            }
    }
}
