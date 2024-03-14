function MyButton(props){
    let classList = ""
     if(props.type == "primary")
     {
        classList = "btn btn-primary"
     }
     if(props.type == "secondary")
     {
       classList = "btn btn-secondary"
     }
    return(<>
        <button className={classList} >{props.btnText}</button>
    </>)
  }

  export default MyButton;