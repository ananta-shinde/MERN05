function Functionality03(props)
{
  var userMessage;
   const handleChange = (e)=>{
      userMessage = e.target.value
   }
   const handleupdate = ()=>{
    props.setMessage(userMessage)
     
 }
   return(
    <>
      <h4>I am functionality 03</h4>
      <p>{props.message}</p>
      <input placeholder="Write your message here..." onChange={handleChange}/>
      <button onClick={handleupdate}>update</button>
    </>
   )
}
 
export default Functionality03;