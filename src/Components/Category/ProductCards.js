

const ProductCards = (props)=> {
    return(
        <>
            <div className="offers">
                <div><img src={`http://localhost:8000/public/img/Product/${props.values.img}`} className="img-fluid" style={{maxHeight : "100px" }} alt="of ring" /></div>
                <h5 className="text-start border-dotted">{props.values.Name}</h5>
                <p id='paragraph' dangerouslySetInnerHTML={{__html: (props.values.Description)}}/>
                <div className="borders-end">
                    <div className="row ">
                        <div className="col-md-6 col-12 p-0">
                            <strong>${props.values.price}</strong>
                        </div>
                        <div className="col-md-6 col-12 p-0">
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6 col-12 pe-4">
                        <i className="fa fa-bars"> {props.values.Category.name}</i>
                    </div>
                    <div className="col-md-6 col-12 pe-1">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0"><i className="fa fa-star checked"></i>
                            </li>
                            <li className="list-inline-item me-0"><i className="fa fa-star checked"></i>
                            </li>
                            <li className="list-inline-item me-0"><i className="fa fa-star checked"></i>
                            </li>
                            <li className="list-inline-item me-0"><i className="fa fa-star checked"></i>
                            </li>
                            <li className="list-inline-item me-0"><i
                                    className="fa fa-star not-checked"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCards;