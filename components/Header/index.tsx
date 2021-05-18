export default function Header(props:any){
    return(
        <div className="bg-secondary pl-10 pt-5 pb-5 flex justify-between">
            <span className="text-primary">This is header</span>
            {
                props.user ? <a href="/api/auth/logout" className='pr-10 text-primary'>LOGOUT</a> : <a href="/api/auth/login" className='pr-10 text-primary'>LOGIN</a> 
            }
            
        </div>
    )
}
