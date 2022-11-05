import  Axios  from "axios"

const CoinsList = ({coinData})=>{
    console.log(coinData)
    return <div>{coinData.coins.map((coin)=>{
        return(<div>
            <div>{coin.name}</div>
            <img src={coin.icon}/>
            <div> {coin.price}</div>
            </div>
        )
    })}</div>
}
export const getServerSideProps = async ({params}) => {

    const data =await Axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0"
        );

    return {
        props:{
            coinData:data.data
        }
    }
}
export default CoinsList

