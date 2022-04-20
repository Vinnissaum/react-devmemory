import * as C from './App.styles';
import Logo from './assets/dev-memory-logo.png';

const App = () => {
  return(
    <C.Container>
      <C.Info>
        <C.Logo>
          <img src={Logo} alt="" style={{width: '3rem'}}/>
          <span>DevMemory</span>
        </C.Logo>
        <C.InfoArea>
        </C.InfoArea>
        <button>REINICIAR</button>
      </C.Info>
      <C.GameArea>

      </C.GameArea>
    </C.Container>
  );
}

export default App;