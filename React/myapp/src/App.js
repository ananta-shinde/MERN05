
import './App.css';
 
function AppBanner(props)
{
  const myStyle = {
    backgroundColor:"orange",
    height : props.height,
    textAlign : "center",
    color:"white",
    fontSize:"50px",
    margin:"25px"
  } 
  return(
    <div  style={myStyle}>
        {props.text}
    </div>
  )
}

function AppList(){
  const listitems = [
    "item1", "item2","item3"
  ]
     return(
      <ul>
         {listitems.map(l=><li>{l}</li>)}
      </ul>
     )
}

function App() {
   
  const banners = [
    {
      title:"First Banner",
      image_url : ""
    },
    {
      title:"Second Banner",
      image_url:""
    },
    {
      title:"third Banner",
      image_url : ""
    }

  ]

  return (
    <>
    <AppList/>
      {banners.map(b=>(<AppBanner text={b.title}/>))}
      <AppList/>
     </>
    
  );
}

export default App;
