import { InputContainer } from './style'

const Input = ({value}) => {
    return(
        <InputContainer>
            <input value={value} placeholder='0' disabled="disabled"/>
        </InputContainer>
    );
}

export default Input; 