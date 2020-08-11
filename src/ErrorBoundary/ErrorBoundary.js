import React, {useState} from 'react';

const errorBoundary = (props) => {
    const [error, setError] = useState({
        hasError: false
    });

    const [message, setMessage] = useState({
        errorMessage: ''
    });

    const componentDidCatch = (error, info) => {
        setError({ hasError: true });
        setMessage({ errorMessage: error });
    }

    if (error.hasError)
        return <h1>{message.errorMessage}</h1>;
    else
        return props.children
}
export default errorBoundary;