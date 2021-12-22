import Button from '@restart/ui/esm/Button';
import { useDispatch} from 'react-redux'
import { fetchCategoryShop } from '../../../redux/Home/Shop/ShopAction';

const Listitem = (props) => {
    const capitalize  =(value) => {
        var textArray = value.split(' ')
        var capitalizedText = ''
        for (var i = 0; i < textArray.length; i++) {
          capitalizedText += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + ' '
        }
        return capitalizedText
      }

      const dispatch = useDispatch()

      const onClickHandler = (obj)=> {
        // console.log("Hello form Listitem")
        dispatch(fetchCategoryShop(obj._id,props.currentPage))   
      }
    return(
        <>
          <li className="catagory-items"><Button onClick={()=> onClickHandler(props.value)}>{capitalize(props.value.Name)}</Button></li>  
        </>
    )
}

export default Listitem