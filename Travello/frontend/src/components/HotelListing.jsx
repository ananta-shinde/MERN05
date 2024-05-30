import { useEffect, useState } from "react";

const HotelListing = () => {
    const queryParams = new URLSearchParams(document.location.search)
    const [hotelList,setHotellist] = useState([])
    const [filters,setFilters] = useState([])
    const handleFilterChange = (e)=>{
        console.log(e.target.value.split("-"))
    }
    useEffect(()=>{
        fetch("http://localhost:5000/hotels?cityId="+queryParams.get("cityId"))
        .then(res=>res.json())
        .then(data=>{
                setHotellist(data)
        })
    },[])
    return ( <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-3 p-5">

                <h4>Selected Filters</h4>
                <hr></hr>
                <h4>Select Filters</h4>
                <h6>Price Per Night</h6>
                <hr></hr>
                <ul className="list-unstyled">
                    <li><input type="checkbox" onChange={handleFilterChange} value="0-1000"/>0-1000</li>
                    <li><input type="checkbox"/>2000-5000</li>
                    <li><input type="checkbox"/>5000-10000</li>
                    <li><input type="checkbox"/>10000 & above</li>
                </ul>
            </div>
            <div className="col">
            {
        hotelList.map(h=>(<div className="hotel-cards card p-5 ps-5 m-5 shadow">
            <div className="row">
                <div className="col-4">
                    <img className="img-fluid main-image" src={h.images[0]}/>
                    <img className="img-fluid thumbnail" src={h.images[1]}/>
                    <img className="img-fluid thumbnail" src={h.images[2]}/>
                </div>
                <div className="col">
                    <h4>{h.name}</h4>
                    <p>{h.address}</p>
                    <ul>
                        {h.facilities.map(f=>(<li>{f}</li>))}
                    </ul>
                    </div>
                <div className="col-2 position-relative">
                    <h3>{h.rent}</h3>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>))
     }
            </div>
        </div>
    </div>
     
    </> );
}
 
export default HotelListing;