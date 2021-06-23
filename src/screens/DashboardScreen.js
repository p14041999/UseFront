import React, { Component } from "react";
import Template from "../components/Template";
import VerifyMail from "../components/VerifyMail";
import { UserContext } from "../context/UserContext";
import user from "../assets/user.svg";
import reffer from "../assets/reffer.png";
import mail from "../assets/mail.svg";
import currency from "../assets/currency.svg";
import airdrop from "../assets/airdrop.svg";
import { Link } from "react-router-dom";
import { getUser } from "../apis/User";

export default class DashboardScreen extends Component {
  static contextType = UserContext;
  refID = React.createRef();
  constructor(props) {
    super(props);
    this.copyText = this.copyText.bind(this);
    this.eastimatedEarning = this.eastimatedEarning.bind(this);
  }
  async componentDidMount() {}
  eastimatedEarning() {
    let tier1 = this.context.user.TierOneReffList.length * 100;
    let tier2 = this.context.user.TierTwoReffList.length * 200;
    let tier3 = this.context.user.TierThreeReffList.length * 300;
    let tier4 = this.context.user.TierFourReffList.length * 400;
    let tier5 = this.context.user.TierFiveReffList.length * 500;
    let tier6 = this.context.user.TierSixReffList.length * 600;
    let tier7 = this.context.user.TierSevenReffList.length * 700;
    let tier8 = this.context.user.TierEightReffList.length * 800;
    let tier9 = this.context.user.TierNineReffList.length * 900;
    let tier10 = this.context.user.TierTenReffList.length * 1000;

    return (
      tier1 +
      tier2 +
      tier3 +
      tier4 +
      tier5 +
      tier6 +
      tier7 +
      tier8 +
      tier9 +
      tier10
    );
  }
  copyText() {
    this.refID.current.select();
    this.refID.current.setSelectionRange(0, 99999);
    window.document.execCommand("copy");
  }
  render() {
    return (
      <Template>
        {!this.context.user.isEmailVerified ? (
          <VerifyMail />
        ) : (
          <div className="container mt-5">
            <div className="row gy-5">
              <div className="col-12 col-md-6">
                <h5 className="mb-4">Basic Details</h5>
                <div className="card h-100">
                  <div className="card-body h-100 d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-start align-items-center mb-3">
                      <div>
                        <img src={user} alt="" />
                      </div>
                      <div className="ms-3">
                        <p className="text-secondary m-0 text-sm">Name</p>
                        <p className="fw-bold m-0">{this.context.user.name}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-3">
                      <div>
                        <img src={mail} alt="" />
                      </div>
                      <div className="ms-3">
                        <p className="text-secondary m-0 text-sm">Email</p>
                        <p className="fw-bold m-0">{this.context.user.email}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img src={reffer} alt="" />
                      </div>
                      <div className="ms-3">
                        <p className="text-secondary m-0 text-sm">
                          Reffered By
                        </p>
                        <p className="fw-bold m-0">
                          {this.context.user.parent
                            ? this.context.user.parent.name
                            : "NA"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 mt-5 pt-5 pt-sm-0">
                <h5 className="mb-4">Campaign Details</h5>
                <div className="card h-100">
                  <div className="card-body h-100 d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-start align-items-center mb-4">
                      <p className="text-secondary m-0 text-sm">User Tier:</p>
                      <p className="fw-bold m-0 ms-2">
                        Tier {this.context.user.userTier}
                      </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-4">
                      <p className="text-secondary m-0 text-sm">
                        Per Refferal Income:
                      </p>
                      <p className="fw-bold m-0 ms-2">
                        {this.context.user.userTier * 100} USE
                      </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-4">
                      <p className="text-secondary m-0 text-sm">
                        Refferal Link:
                      </p>
                      <div className="link-copier m-0 ms-2">
                        <input
                          ref={this.refID}
                          className="custom-form"
                          value={`https://useyourcrypto.org/ref/${this.context.user.refURI}`}
                        />
                        <button className="copy-btn" onClick={this.copyText}>
                          Copy
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-4">
                      <p className="text-secondary m-0 text-sm">
                        Participated:
                      </p>
                      <p className="fw-bold m-0 ms-2">
                        {this.context.user.participatedInAirDrop ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!this.context.user.participatedInAirDrop && (
              <Link to="/participate-in-airdrop">
                <div className="pt-5">
                  {" "}
                  <div className="card mt-5">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <p className="m-0 text-dark">
                        Participate in the Airdrop to get your refferal Counted
                      </p>
                      <img src={airdrop} height="40" alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            )}
            <div className="row my-5 gy-5">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-primary">Total Refferal</h3>
                    <h2 className="text-dark">{this.context.user.reffered}</h2>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-primary">Eastimated Earning</h3>
                    <h2 className="text-dark">{this.eastimatedEarning()}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Template>
    );
  }
}
