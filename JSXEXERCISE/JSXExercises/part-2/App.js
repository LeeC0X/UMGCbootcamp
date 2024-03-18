const App =()=>{
    return (<div>
        <Tweet name="Mia" 
        username="MiaLee"
        date = {new Date().toDateString()}
        message = "I miss Ginger"/>
        <Tweet name="Ginger" 
        username="GingerLee"
        date = {new Date().toDateString()}
        message = "I miss You too, Mia"/>
        <Tweet name="Mikki" 
        username="MikkiVue"
        date = {new Date().toDateString()}
        message = "Hello, How are you doing?"
        />
    </div>
    )
}