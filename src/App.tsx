import { useEffect, useState, useTransition } from 'react';
import * as C from './App.styles';
import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import Logo from './svgs/main-logo.svg';
import RestartSvg from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';
import {items} from './data/items';
import { GridItem } from './components/GridItem';
import { formatTimeElapsed } from './utils/formatTimeElapsed';

const App = () => {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => restartHandleClick, []);
  useEffect(() => {
    const timer = setInterval(()=> {
      if(playing){
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  },[playing, timeElapsed]);

  // Verify if opened are equal
  useEffect(()=>{
    if(shownCount === 2){
      let opened = gridItems.filter(item => item.shown === true);
      if(opened.length === 2){
        // If both are equal, make every shown permanent
        if(opened[0].item === opened[1].item){
          let tmpGrid = [...gridItems];
          for (let i in gridItems){
            if(tmpGrid[i].shown){
              tmpGrid[i].permanentShow = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);

          setMoveCount(moveCount + 1);
        } else {
          // If they are not equal, close all shown
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in gridItems){
              if(gridItems[i].shown){
                tmpGrid[i].shown = false;
              }
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }
        setMoveCount(moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  // Verify if game is over
  useEffect(()=>{
    if (moveCount > 0 && gridItems.every(item => item.permanentShow === true)){
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  const restartHandleClick = () => {
    // Step 1 - game reset
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    setGridItems([]);

    // Step 2 - grid create
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++){
      tmpGrid.push({item: null, shown: false, permanentShow: false});
    }
    for (let w = 0; w < 2; w++){
      for (let i = 0; i < items.length; i++){
        let position = -1;
        while (position < 0 || tmpGrid[position].item !== null){
          position = Math.floor(Math.random() * (items.length * 2)); 
        }
        tmpGrid[position].item = i;
      }
    }

    setGridItems(tmpGrid);

    // Step 3 - start the game
    setPlaying(true);
  }

  const handleItemClick = (index: number) =>{
    if(playing && index !== null && shownCount < 2){
      let tmpGrid = [...gridItems];
      
      if(tmpGrid[index].permanentShow === false && tmpGrid[index].shown === false){
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tmpGrid);
    }
  }

  return(
    <C.Container>
      <C.Info>
        <C.Logo>
          <img src={Logo} alt="" width='200'/>
          <span>MATCHING GAME</span>
        </C.Logo>
        <C.InfoArea>
          <InfoItem label='Tempo:' value={formatTimeElapsed(timeElapsed)}/>
          <InfoItem label='Movimentos:' value={moveCount.toString()}/>
        </C.InfoArea>
        <Button label='Restart' icon={RestartSvg} onClick={restartHandleClick}/>
      </C.Info>
      <C.GameArea>
        <C.Grid>
          {gridItems.map((item, index)=>(
            <GridItem key={index} item={item} onClick={()=> handleItemClick(index)}/>
          ))}
        </C.Grid>
      </C.GameArea>
    </C.Container>
  );
}

export default App;