import { useEffect, useState } from "react";

const HotelListing = () => {
    const queryParams = new URLSearchParams(document.location.search)
    const [hotelList,setHotellist] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/hotels?cityId="+queryParams.get("cityId"))
        .then(res=>res.json())
        .then(data=>{
                setHotellist(data)
        })
    },[])
    return ( <>
     {
        hotelList.map(h=>(<div className="card p-3">
            <div className="row">
                <div className="col-4">
                    <img className="img-fluid" src={h.images[0]}/>
                </div>
                <div className="col-4"><h2>{h.name}</h2></div>
                <div className="col-4"><h3>{h.rent}</h3></div>
            </div>
        </div>))
     }
    </> );
}
 
export default HotelListing;