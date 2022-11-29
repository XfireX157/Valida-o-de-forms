import styled from "styled-components"

export const Container = styled.div`
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;   
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;

    .error{
        background-color: #f7755e;
    }
`

export const Forms = styled.form`
    width: 80%;
    height: 100%;
    margin: auto;
    padding: 10px;
    background-color: #ececec;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 3px 3px 5px #ccc; 
    flex: 1;

    legend{
        text-align: center;
        font-family: sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 15px 0;
    }
`

export const invalid = styled.p `
    font-family: sans-serif;
    color: #f85050;
    font-size: 1rem;
    padding-left: 3.5%;
`