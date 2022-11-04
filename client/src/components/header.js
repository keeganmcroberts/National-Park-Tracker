function Header(){
    return(
        <div className="header">
            <h1>National Parks</h1>
            <div className="page-banner">
                <ul className="banner-links">
                    <ul className="links"><a  href="/">Park1</a></ul>
                    <ul className="links"><a  href="/teams">Park2</a></ul>
                    <ul className="links"><a  href="/players">Park3</a></ul>
                    <ul className="links"><a  href="/leagueLeaders">Park4</a></ul>        
                </ul>
            </div>

        </div>
    )
}
export default Header;