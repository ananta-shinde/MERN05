const AddNewHotel = () => {
    return ( <>
        <div className="container p-4">
            <h3>Welcome to Travello, Let us know about your buisness</h3>
            <div className="row">
                <div className="col-5">
                    <input className="form-control" placeholder="Hotel Name"/>
                </div>
                <div className="col-5">
                   <textarea className="form-control"/>
                </div>
                <div className="col-5">
                  <select className="form-control">
                    <option>-- select aminities--</option>
                  </select>
                </div>
                <div className="col-5">
                    <input type="file"  className="form-control" name="file_upload" placeholder="Images"/>
                </div>
            </div>
        </div>
    </> );
}
 
export default AddNewHotel;