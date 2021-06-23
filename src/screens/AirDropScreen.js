import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Template from "../components/Template";
import { UserContext } from "../context/UserContext";
import { submitData, getData } from "../apis/Airdrop";
import { getUser } from "../apis/User";

export default class AirDropScreen extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      userId: "",
      telegramHandle: "",
      twitterHandle: "",
      twitterPostLink: "",
      youtubeEmail: "",
    };
  }
  async componentDidMount() {
    let obj = await getUser();
    this.isParticipated = obj.user.participatedInAirDrop;
    this.setState({ ...this.state, userId: obj.user._id });
  }
  handleSubmitClick = async (e) => {
    e.preventDefault();
    console.log(this.state);
    // getData();
    submitData(this.state);
  };
  render() {
    if (this.context.user.participated) {
      return <Redirect to="/" />;
    }
    return (
      <Template>
        <div className="container my-5">
          <h5 className="mb-3">Complete Airdrop</h5>
          <div className="card mb-5">
            <div className="card-body p-5">
              <div className="d-flex justify-content-between mb-3">
                <p>1. Join Telegram Group</p>
                <a href="https://t.me/pralayM" rel="noreferrer" target="_blank">
                  <button className="btn btn-primary">Join Now</button>
                </a>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p>2. Follow us on twitter</p>
                <a
                  href="https://mobile.twitter.com/Useyourcrypto"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="btn btn-primary">Follow Now</button>
                </a>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p>3. Retweet this post</p>
                <a href="https://t.me/pralayM" rel="noreferrer" target="_blank">
                  <button className="btn btn-primary">Retweet Now</button>
                </a>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p>4. Subscribe to our youtube channel</p>
                <a
                  href="https://www.youtube.com/channel/UCbGUSbiFMABJJuqPUxYYvfQ"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="btn btn-primary">Subscribe Now</button>
                </a>
              </div>
              <div className="mb-3">
                <p>5. Your telegram handle</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="@example"
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      telegramHandle: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <p>6. Your twitter handle</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="@example"
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      twitterHandle: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <p>7. Link to retweeted post</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="https://twitter.com/xyzz/status/1234560943"
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      twitterPostLink: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <p>8. Your youtube email</p>
                <input
                  type="email"
                  class="form-control"
                  placeholder="you@gmail.com"
                  onChange={(e) => {
                    this.setState({
                      ...this.state,
                      youtubeEmail: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div>
                <Link to="/">
                  <button
                    className="btn btn-lg btn-primary"
                    onClick={this.handleSubmitClick}
                  >
                    Submit Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}
