import React, { Component } from "react";
import { resendMail, getUser } from "../apis/User";

export default class VerifyMail extends Component {
  handleResendMail = async () => {
    let user = await getUser();
    console.log(user.user._id);
    console.log("hello");

    resendMail({ userId: user.user._id });
  };
  render() {
    return (
      <div className="h-100">
        <div className="h-100 row d-flex justify-content-center align-items-center me-0">
          <div className="col-12 col-md-4 col-xl-3 pe-0">
            <div className="card mx-2">
              <div className="card-body p-5">
                <h4 style={{ color: "grey" }}>IMPORTANT</h4>
                <p>
                  You Need to verify your mail first. Can't find a mail from us?
                  Try checking your spam folder.
                </p>
                <button onClick={this.handleResendMail}>Resend Email</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
