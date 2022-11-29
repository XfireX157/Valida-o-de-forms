import styled from "styled-components";

export const Container = styled.footer`
    background: #6278F7;
    color: #FFF;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul li{
        display: inline-block;
        margin-right: 32px;
    }

    ul li:last-child{
        margin-right: 0;
    }
`