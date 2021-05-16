export default function Header(props:any){
    const className = "p-5 prominent-button"
    return(
        <div className="bg-violet-200 pl-10 pt-5 pb-5 flex justify-between">
            <img src="./images/wallora-logo-170x53.jpeg"></img>
            <span>This is header</span>
            {
                props.user ? <a href="/api/auth/logout" className={className}>Logout</a> : <a href="/api/auth/login" className={className}>Login</a> 
            }
            
        </div>
    )
}
