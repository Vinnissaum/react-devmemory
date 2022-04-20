import * as C from './App.styles';
import { Button } from './components/button';
import { InfoItem } from './components/InfoItem';
import Logo from './svgs/main-logo.svg';
import RestartSvg from './svgs/restart.svg';

const App = () => {
  const restartHandleClick = () => {

  }

  return(
    <C.Container>
      <C.Info>
        <C.Logo>
          <img src={Logo} alt="" width='200'/>
          <span>MATCHING GAME</span>
        </C.Logo>
        <C.InfoArea>
          <InfoItem label='Tempo:' value='00:00'/>
          <InfoItem label='Movimentos:' value='0'/>
        </C.InfoArea>
        <Button label='Restart' icon={RestartSvg} onClick={restartHandleClick}/>
      </C.Info>
      <C.GameArea>

      </C.GameArea>
    </C.Container>
  );
}

export default App;