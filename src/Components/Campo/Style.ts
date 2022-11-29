import styled from 'styled-components'

interface IProps {
    primary?: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 35px;
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input<IProps>`
    font-family: sans-serif;
    font-weight: 500;
    width: 100%;
    padding: ${props => props.primary ? "15px 24px" : "0px 0px"};
    border: none;
    outline: none;
    box-shadow: 1.5px 1.5px 25px 1px #ccc;
    border-radius: 5%;
`

export const Icon = styled.span`
    font-size: 1.5rem;
    padding-right: 8px;
    vertical-align: middle;
    cursor: pointer;
`