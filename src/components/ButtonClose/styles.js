import styled,{css} from 'styled-components'

const button = css`
border: 3px solid #ffffff;
background: transparent;
color: #ffffff;
border-radius: 30px;
cursor: pointer;
padding: 10px 20px;
font-size: 20px;
font-weight: 500;
&:hover{
    color: #ff0000;
    background: #ffffff;
   
}
`


export const ButtonWhite = styled.button`
${button}
`
export const ButtonRed = styled.button`${button}
background: #ff0000;
border: 4px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

&:hover{
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background: #ff0000;
    color: #FFFFFF;
}
`