import { useEffect, useState } from "react";
import "./hotels.css"

const Hotels = () => {

    var showRoomsAndGuests = false;
    const [cities,setCities] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:5000/cities")
        .then(res=>res.json())
        .then(data=>{
            setCities(data)
        })
    },[])

    return ( <>
          <div className="container-fluid">
            <div className="row">
                <div className="col hotel-hero">
                    <form action="/hotel/list" className="position-relative">
                        <div className="card p-4">
                            <div className="row">
                            <div className="col-3">
                                <label>City, Property Name Or Location</label>
                                <select className="form-control" name="cityId">
                                    <option value={0}>-- select city --</option>
                                    {cities.map(c=>(<option value={c.id}>{c.name}</option>))}
                                </select>
                            </div>
                            <div className="col-2">
                                <label>Check-In</label>
                                <input className="form-control" type="date" name="checkInDate"/>
                            </div>
                            <div className="col-2">
                                <label>Check-Out</label>
                                <input className="form-control" type="date" name="checkOutDate"/>
                            </div>
                            <div className="col-3 position-relative">
                                 <label>Rooms & Guests</label>
                                {showRoomsAndGuests && <div className="rooms-and-guest-form p-4">
                                    <div className="row">
                                        <label className="col-6">Rooms</label>
                                        <select className="col-6" name="noOfRooms">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>
                                        <label className="col-6">Adults</label>
                                        <select className="col-6" name="noOfAdults">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>
                                        <label className="col-6">Childs</label>
                                        <select className="col-6" name="noOfChilds">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>
                                        <div>
                                            <button className="btn btn-primary">Apply</button>
                                        </div>
                                    </div>
                                 </div>}
                            </div>
                        </div>
                        </div>
                        <button className="btn btn-primary search-btn">Search</button>
                    </form>
                </div>
            </div>
          </div>
    </> );
}
 
export default Hotels;

 