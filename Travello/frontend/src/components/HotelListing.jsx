const HotelListing = () => {
    const queryParams = new URLSearchParams(document.location.search)
    return ( <>
    <p>{queryParams.get("city")}</p>
    <p>{queryParams.get("noOfRooms")}</p>
    <p>{queryParams.get("checkInDate")}</p>
    <p>{queryParams.get("city")}</p>
    </> );
}
 
export default HotelListing;