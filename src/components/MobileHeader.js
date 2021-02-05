
const MobileHeader = (props) => {

    const handleClick = (e) => {
        props.menu(e)
    }

    return (
        <div className="mobile-header-div">

            <div className="my-portfolio-heading">
                <h1 className="mobile-header-h1">My Portfolio</h1>
            </div>

            <div className="menu-button">
                <button onClick={handleClick} className="button-m"></button>
            </div>
        </div>
    )
}

export default MobileHeader