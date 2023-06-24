
// import { ButtonRed, ButtonWhite } from "./styles"

// function ButtonClose({ children, red, ...props }) {
//     return (
//         <>{red ? (<ButtonRed{...props}>{children}</ButtonRed>) : <ButtonWhite {...props}>{children}</ButtonWhite>}


//         </>
//     )
// }
// export default ButtonClose



// class ButtonClose extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: true
//     };
//   }

//   fecharJanela() {
//     this.setState({ isOpen: false });
//   }

//   render() {
//     if (!this.state.isOpen) {
//       return null; // Não renderiza nada se a janela estiver fechada
//     }

//     return (
//       <div>
//         <h1>Minha Janela</h1>
//         <button onClick={() => this.fecharJanela()}>Fechar</button>
//         {/* Conteúdo da janela */}
//       </div>
//     );
//   }
// }

// export default ButtonClose;
