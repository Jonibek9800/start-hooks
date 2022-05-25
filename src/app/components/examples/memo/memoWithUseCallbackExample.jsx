import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("button log out");
    });
    return <button className="btn btn-primary" onClick={onLogOut}>LogOut</button>;
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) return false;
    return true;
};
const MemoizedLOgOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return <>
        <button className="btn btn-primary" onClick={() => setState(!state)}>initial render</button>
        <MemoizedLOgOutButton onLogOut={handleLogOut} />
    </>;
};

export default MemoWithUseCallbackExample;
