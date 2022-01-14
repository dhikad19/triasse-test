import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
    --light-blue-color: #0d6dfd17;
    --dark-blue-color: #0d6efd;
    --indigo-color: #6610f2;
    --purple-color: #6f42c1;
    --pink-color: #d63384;
    --red-color: #dc3545;
    --orange-color: #fd7e14;
    --yellow-collor: #ffc107;
    --green-color: #198754;
    --teal-color: #20c997;
    --cyan-color: #0dcaf0;
    --white-color: #fff;
    --gray-color: #6c757d;
    --gray-dark: #343a40;
    --secondary-color: #6c757d;
    --success-color: #198754;
    --info-color: #0dcaf0;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --light-color: #f8f9fa;
    --dark-color: #212529;
    --body-font-size: 1rem;
    --body-font-weight: 400;
    --body-line-height: 1.5;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    background-color: var(--white-color);
    text-align: center;
    transition: all .4s ease-in-out;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: var(--dark-blue-color);
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: var(--dark-blue-color);
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

h1{
    font-size: 4rem;

    @media screen and (max-width: 480px){
        font-size: 3rem
    }
}
`

export default GlobalStyle;