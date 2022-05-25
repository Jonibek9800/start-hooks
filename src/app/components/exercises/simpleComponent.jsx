import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const ExitButton = () => {
        return (<>
            <h1>Content</h1>
            <button className="btn btn-success mt-3 mx-3" onClick={onLogOut}>Выйти из системы</button>
        </>
        );
    };
    const LoginButton = () => {
        return (<>
            <h1>Вход</h1>
            <button className="btn btn-primary mt-3 mx-3" onClick={onLogin}>Войти</button>
        </>);
    };
    return <>
        {!isAuth
            ? <LoginButton />
            : <ExitButton />}
    </>;
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
