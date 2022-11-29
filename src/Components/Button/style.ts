import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 30px;
`

export const Btn = styled.button`
    width: 50%;
    height: 50px;
    text-align: center;
    font-size: 0.9rem;
    font-family: sans-serif;
    background-color:#435bca;
    color: #fff;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover{
        transition: all 0.2s ease-in;
        background-color: #3c53b8;
    }
`