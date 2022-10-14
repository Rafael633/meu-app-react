import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="error_page">
            <h1>Opa!</h1>
            <p>A página que você está procurando não foi encontrada. Navegue mais Capitão!</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
};
export default ErrorPage;