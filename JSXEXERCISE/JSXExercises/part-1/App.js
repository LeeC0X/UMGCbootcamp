const App =()=>{
    return <div>
        <FirstComponent />
        <NamedComponent name ="happy"/>
    </div>
}
ReactDOM.render(<App />,document.getElementById("root"))