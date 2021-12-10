import Button from "@restart/ui/esm/Button"; 

const Pagination = (props) => {
    return(
        <>
        {/* {console.log(props.page)} */}
        <div className="row">
                <div className="pagination-content">
                    <div aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <Button className="page-item border-end border-5 border-white" onClick={props.prev}>
                                Prev
                            </Button>
                            {props.page && props.page.map( (Item,index) =>{
                                //console.log(Item)
                                return(
                                    <Button  key={index} className="page-item border-end border-5 border-white"  onClick={()=> props.onClickHandler(Item)}>{Item+1}</Button>
                                )
                            })
                            }
                            <Button className="page-item border-end border-5 border-white" onClick={props.next}>
                                Next
                            </Button>
                        </ul>
                    </div>
                </div>
        </div>          
        </>
    )
}

export default Pagination;