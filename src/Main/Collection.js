
import Cards from './Cards'
import Data from "../Data/CollectionData";
const Collection = () => {
    return (
        <section className="collection py-5">
        <div className="container">
          <div className="row">
            {
                Data.map( item => {
                    <Cards 
                        key={item.id} 
                        my_img={item.img} 
                        my_title={item.title} 
                        my_des={item.des} 
                        my_button={item.btn_text} />
                })
            }
          </div>
        </div>
      </section>
    )
}
export default Collection ;