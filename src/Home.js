function Home({history}){
    console.log(history)
    return(
        <div>
        <p>Home Page</p>
        <button onClick = {history.goBack}>Go Back</button>  
        <button onClick = {history.goForward}>Go Forward</button>
        <button onClick = {()=>history.push("/posts")}>Go Posts Page - push</button>
        <button onClick = {()=>history.replace("/posts")}>Go Posts Page - replace</button>
        </div>
    )
}

export default Home;