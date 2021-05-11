export default function Header(){
    return(
        <div className="bg-green-200 pl-10 pt-5 pb-5 flex justify-between">
            <span>This is header</span>
            <a href="/api/auth/login" className='pr-10'>LOGIN</a>
        </div>
    )
}