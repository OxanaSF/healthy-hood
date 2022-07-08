import styled from 'styled-components'


export const StyledButton = styled.button`
    background-color: #E67B71;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;

    &:hover{
        cursor: pointer;
        background-color: #d95f55; 
    }
`

export const ResultItem = styled.div`
    padding: 10px;
    border-radius: 10px;
    background-color: #A0DAF1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 75px;
    width: 70vw;
    & > img:hover{
        cursor: pointer;
    }
`

export const ResultsArea = styled.div`
    margin: 150px 10px 100px 10px;
    text-align: center;
`

export const VideoPlayerContainer = styled.div `
    background-color: #A0DAF1;
    padding: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`