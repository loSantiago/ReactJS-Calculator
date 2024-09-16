import styled from "styled-components"

const ButtonContainer = styled.button`
    appearance: button;
    background-color: #1899D6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    letter-spacing: .8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 16px 13px 10px 13px;
    font-weight: 500;
    text-align: center;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter .2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 60px;

    @media (min-width: 321px) {
        flex: 1px;
        margin-left: 3px;
        margin-right: 3px;
    }

    &:after {
        background-clip: padding-box;
        background-color: #1CB0F6;
        border: solid transparent;
        border-radius: 16px;
        border-width: 0 0 4px;
        bottom: -4px;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }

    &:main, &:focus {
        user-select: auto;
    }

    &:hover:not(:disabled) {
        filter: brightness(1.1);
        -webkit-filter: brightness(1.1);
    }

    &:disabled {
        cursor: auto;
    }

    &:active {
        border-width: 4px 0 0;
        background: none;
    }

    &.large{
        width: 100%;
    }
`;

export default ButtonContainer;