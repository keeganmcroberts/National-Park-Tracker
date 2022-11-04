

function ParkDetailPage({eachPark}){
    return(
        <div className="parkCard">
            <p>{eachPark.fullName}</p>
            <img src={eachPark.images[0]}></img>
        </div>
    )
}

export default ParkDetailPage;