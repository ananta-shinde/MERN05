import "./hotels.css"

const Hotels = () => {
    var showRoomsAndGuests = true;
    return ( <>
          <div className="container-fluid">
            <div className="row">
                <div className="col hotel-hero">
                    <form action="" className="position-relative">
                        <div className="card p-4">
                            <div className="row">
                            <div className="col-3">
                                <label>City, Property Name Or Location</label>
                                <select className="form-control">
                                    <option>Goa</option>
                                    <option>Mumbai</option>
                                    <option>Delhi</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <label>Check-In</label>
                                <input className="form-control" type="date"/>
                            </div>
                            <div className="col-2">
                                <label>Check-Out</label>
                                <input className="form-control" type="date"/>
                            </div>
                            <div className="col-3 position-relative">
                                 <label>Rooms & Guests</label>
                                {showRoomsAndGuests && <div className="rooms-and-guest-form p-4">
                                    <div className="row">
                                        <label className="col-6">Rooms</label>
                                        <select className="col-6">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>
                                        <label className="col-6">Adults</label>
                                        <select className="col-6">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>
                                        <label className="col-6">Childs</label>
                                        <select className="col-6">
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

 