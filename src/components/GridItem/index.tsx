import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import cardLogo from '../../svgs/jedi-order.svg';
import {items} from '../../data/items';

type Props = {
    item: GridItemType;
    onClick: () => void;
}

export const GridItem = ({item, onClick}: Props) => {
    return(
        <C.Container onClick={onClick} bgcolor={item.permanentShow || item.shown}>
            {!item.shown && !item.permanentShow &&
                <C.Icon src={cardLogo} alt=''/>
            }
            {(item.permanentShow || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt='' />
            }
        </C.Container>
    );
}