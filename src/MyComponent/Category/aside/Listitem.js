
import Button from '@restart/ui/esm/Button';
const Listitem = (props) => {
    const capitalize  =(value) => {
        var textArray = value.split(' ')
        var capitalizedText = ''
        for (var i = 0; i < textArray.length; i++) {
          capitalizedText += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + ' '
        }
        return capitalizedText
      }
      const onClickHandler = (id)=> {
        console.log("Hello form Listitem")
       return props.fun(id)    
      }
    return(
        <>
          <li className="catagory-items"><Button onClick={()=> onClickHandler(props.value._id)}>{capitalize(props.value.Name)}</Button></li>  
        </>
    )
}

export default Listitem