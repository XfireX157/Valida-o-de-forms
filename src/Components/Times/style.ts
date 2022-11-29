import styled from "styled-components";

interface IProps {
    primary?: string
}

export const Container = styled.section`
    position: relative;
    text-align: center;
    font-size: 2rem;
    padding: 32px;
`

export const TxtInfo = styled.h3<IProps>`
    position: relative;
    display: inline-block;
    padding-bottom: 8px;
    border-bottom: ${(props) => props.primary};
`

export const Box = styled.article`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 32px;
`

export const InputColor = styled.input`
    position: absolute;
    right: 50px;
    top: 15px;
    cursor: pointer;
`   