import {useNavigate} from 'react-router-dom';






function Header({parkData}){

    let navigate = useNavigate();
    function viewPark(id){
        navigate(`/park/${id.id}`)
    }



    return(
        <div className="header">
            <h1>National Parks</h1>
            <div className="page-banner">
                <li className="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Parks</a>
                {parkData.map(eachPark=>{
                if(eachPark.designation === "National Park")
                return(
                <div className="dropdown-content">
                    <a onClick={() => viewPark(eachPark)} className="links">{eachPark.fullName}</a>        
                </div>
                )})}
                </li>
            </div>

        </div>
    )
}
export default Header;