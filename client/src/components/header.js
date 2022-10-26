function Header(){
    return(
        <div className="header">
            <h1>Pro Football Figures</h1>
            <div className="page-banner">
                <ul className="banner-links">
                    <ul className="links"><a  href="/teams">Teams</a></ul>
                    <ul className="links"><a  href="/players">Players</a></ul>
                    <ul className="links"><a  href="/leagueLeaders">Leage Leaders</a></ul>        
                </ul>
            </div>

        </div>
    )
}
export default Header;