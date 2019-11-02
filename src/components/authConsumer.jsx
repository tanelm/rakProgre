import React from "react";
import {AuthContext} from "../index.jsx";

const authConsumer = (WrapperComponent) => {
    return class extends React.PureComponent {
        static displayName = "authconsumer-hoc";

        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => <WrapperComponent {...this.props} {...value} />
                    }
                </AuthContext.Consumer>
            );
        }
    };
};

export default authConsumer; 