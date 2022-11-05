import Link from "next/link"

const pageNotFound =()=>{
    return (
        <div>
            <h1> pagina nao encontrada</h1>
            <h2>check to see if you are in the right page</h2>
            <Link href='/'>click here to go home</Link>
        </div>
    )
}
export default pageNotFound