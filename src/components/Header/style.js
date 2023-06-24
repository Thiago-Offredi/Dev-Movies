import styled from 'styled-components'


export const Container = styled.div`
z-index: 99;
position: fixed;
top: 0;
display: flex;
img{
    width:25%;
}
justify-content: space-between;
padding: 10px 50px;
align-items: center;

`
export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 50px;

`
export const Li = styled.li`
font-size: 28px;
font-weight: 600;
cursor: pointer;
position: relative;

a{
    text-decoration: none;
    color: #FFFFFF;
}
&::after{
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 0;
    /* transform: translateX(-50%); */
    transition: width .5s ease-in-out;
}
&:hover::after{
    width: 100%;
}
`