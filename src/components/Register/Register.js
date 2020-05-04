import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerEmail: "",
            registerPassword: "",
            registerName: "",
        };
    }

    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value });
    };

    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value });
    };

    onNameChange = (event) => {
        this.setState({ registerName: event.target.value });
    };

    onSubmitRegister = () => {
        fetch("https://secure-coast-73756.herokuapp.com/register", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.registerEmail,
                password: this.state.registerPassword,
                name: this.state.registerName,
            }),
        })
            .then((response) => response.json())
            .then((user) => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange("home");
                } else {
                    console.log(user)
                }
            })
    };

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba dark-gray b--black-20 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <div className="pa4 black-80">
                    <div className="measure">
                        <fieldset
                            id="sign_up"
                            className="ba b--transparent ph0 mh0"
                        >
                            <legend className="f4 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    onChange={this.onNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="email-address"
                                >
                                    Email
                                </label>
                                <input
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                />
                            </div>
                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitRegister}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p
                                onClick={() => {
                                    onRouteChange("signin");
                                }}
                                className="p-link f6 link dim black db"
                            >
                                Signin{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Register;