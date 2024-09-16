import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    max-width: 750px;
    background-color: #FAFAFA;
`;

export const Content = styled.div`
    width: 80%;
    min-height: 352px;
    min-width: 260px;
    max-width: 380px;
    border: 2px solid #AAA;
    background-color: #FFF;

    border-radius: 40px;

    @media (min-width: 321px) {
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const AlertFild = styled.div`
    width: 80%;
    min-height: 50px;
    min-width: 300px;
    max-width: 420px;

    border-radius: 40px;

    opacity: 0.5;
    text-align: center;
    vertical-align: middle;

    font-size: 18pt;
    color: #EEE;
    margin-bottom: 20px;
    padding: 7px;

    &.error {
        border: 2px solid #FFF;
        background-color: #CC0000;
    }
`;

export const Row = styled.div`
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;

    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
`;