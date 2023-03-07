{parksArray.map(myParks=>{
        if (user.id === myParks.user_id)
            {parkData.map(eachPark=>{
                if (myParks.parkCode === eachPark.parkCode)
                return(
                    <h4>{myParks.parkCode}</h4>
                )
    
    
            })}
    
        })}