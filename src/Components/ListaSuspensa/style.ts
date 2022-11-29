import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 35px;

    select {
        font-family: sans-serif;
        font-weight: 500;
        width: 100%;
        padding: 15px 25px;
        border: none;
        outline: none;
        box-shadow: 1.5px 1.5px 25px 1px #ccc;
        border-radius: 5%;
    }
`

export const Icon = styled.span`
    font-size: 1.5rem;
    padding-right: 15px;
    vertical-align: middle;
`

export const Label = styled.label`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`