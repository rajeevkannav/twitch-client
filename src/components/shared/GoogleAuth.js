import React from 'react';

class GoogleAuth extends React.Component {

    state = {isSignedIn: false};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '509383351262-ircdl0s4tddf976efodorfqnd5k60pve.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    };

    onSignIn = () => {
      this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div> I dont know if we're singed in.</div>;
        } else if (this.state.isSignedIn) {
            return (<button onClick={this.onSignOut} className="ui red google button">
                <i className="google icon"/>
                Sign out
            </button>);
        } else {
            return (<button onClick={this.onSignIn} className="ui red google button">
                <i className="google icon"/>
                Sign in with Google
            </button>);
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;