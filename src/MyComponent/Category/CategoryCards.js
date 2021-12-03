

const CategoryCards = (props)=> {
    return(
        <>
            <div class="offers">
                <div><img src={`http://localhost:8000/public/img/Product/${props.values.img}`} class="img-fluid" alt="of ring"/></div>
                <h5 class="text-start border-dotted">Blue Sky Diamond</h5>
                <p id='paragraph'>Lorem ipsum dolor, sit amet cons adipisicing elit. Aspernatur
                    rerum
                    delectus </p>
                <div class="borders-end">
                    <div class="row ">
                        <div class="col-md-6 col-12 p-0">
                            <strong>$159.8</strong>
                        </div>
                        <div class="col-md-6 col-12 p-0">
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6 col-12 pe-4">
                        <i class="fa fa-bars"> Catagory</i>
                    </div>
                    <div class="col-md-6 col-12 pe-1">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                            </li>
                            <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                            </li>
                            <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                            </li>
                            <li class="list-inline-item me-0"><i class="fa fa-star checked"></i>
                            </li>
                            <li class="list-inline-item me-0"><i
                                    class="fa fa-star not-checked"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCards;