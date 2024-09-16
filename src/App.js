import { Container, Content, Row, AlertFild} from "./style";
import Button from "./components/Button";
import Input from './components/Input'
import isValidExpression from "./services/ExpressionValidator"
import { useState } from "react";

const fixedDecimalNumbers = 2;

function App() {
  const [currentNumber, setCurrentumber] = useState('');
  const [error, setError] = useState('')
  const [errorClass, setErrorClass] = useState('')


  const handleAddNumber = (number) => {
    setCurrentumber(prev => `${prev}${number}`);
  };

  //Clear all inputs
  const handleAllClear = () => {
    setCurrentumber('');
  };

  //Delete last input.
  const handleClear = () => {
    setCurrentumber(current => {
      current += ""; //Resolve an error of the clear after operation.
      return current.slice(0, -1)
    });
  };

  const handleCalculator = () => {
    setCurrentumber(currentExpression => {
      currentExpression += '';
      const result = isValidExpression(currentExpression);
      if(result.value === null){
        handleErrorClass('error')
        handleError(result.error);
        return currentExpression;
      }else{
        //Clean error.
        handleErrorClass('');
        handleError('');

        //convert a return to string and fixed de decimal value to 2 numbers.
        let res = result.value.toFixed(fixedDecimalNumbers).toString();
        return res.replaceAll('.', ',');
      }
    })
  }

  const handleError = (err) => {
    setError((error) => { return err; });
  }

  const handleErrorClass = (c) => {
    setErrorClass((errorClass) => { return c; });
  }
  
  return(
    <Container>
      <AlertFild className={errorClass}>{error}</AlertFild>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label={"C"} onClick={() => handleClear()}></Button>
          <Button label={"("} onClick={() => handleAddNumber('(')}></Button>
          <Button label={")"} onClick={() => handleAddNumber(')')}></Button>
          <Button label={"/"} onClick={() => handleAddNumber('/')}></Button>
        </Row>
       <Row>
        <Button label={1} onClick={() => handleAddNumber('1')}></Button>
        <Button label={2} onClick={() => handleAddNumber('2')}></Button>
        <Button label={3} onClick={() => handleAddNumber('3')}></Button>
        <Button label={'x'} onClick={() => handleAddNumber('*')}></Button>
       </Row>

       <Row>
        <Button label={4} onClick={() => handleAddNumber('4')}></Button>
        <Button label={5} onClick={() => handleAddNumber('5')}></Button>
        <Button label={6} onClick={() => handleAddNumber('6')}></Button>
        <Button label={'-'} onClick={() => handleAddNumber('-')}></Button>
       </Row>

       <Row>
        <Button label={7} onClick={() => handleAddNumber('7')}></Button>
        <Button label={8} onClick={() => handleAddNumber('8')}></Button>
        <Button label={9} onClick={() => handleAddNumber('9')}></Button>
        <Button label={'+'} onClick={() => handleAddNumber('+')}></Button>
       </Row>

       <Row>
        <Button label={"AC"} onClick={() => handleAllClear()}></Button>
        <Button label={'0'} onClick={() => handleAddNumber('0')}></Button>
        <Button label={','} onClick={() => handleAddNumber(',')}></Button>
        <Button label={'='} onClick={() => handleCalculator()}></Button>
       </Row>
        
      </Content>
    </Container>
  );
}

export default App;
