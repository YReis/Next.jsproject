import { useRouter } from "next/router"
const MenuLogado = ()=>{
    const router = useRouter()
    const {usuario} = router.query
    return <div>
        menu principalpadraos {usuario}
    </div>
}
export default MenuLogado