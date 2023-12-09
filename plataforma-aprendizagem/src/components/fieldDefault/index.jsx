
import { MainContainer,TextInput,LabelInput} from "./styles"

function FieldDefault({label,type}) {
  return (
    <MainContainer>
        <LabelInput>{label}</LabelInput>
        <TextInput type={type}/>
    </MainContainer>
  )
}

export default FieldDefault
