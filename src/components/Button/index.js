import ButtonContainer from "./style"

const Button = ({label, onClick, classN}) => {
    return(
        <ButtonContainer className={classN} onClick={onClick}>{label}</ButtonContainer>
    );
}

export default Button;