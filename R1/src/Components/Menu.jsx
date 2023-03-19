function Menu({ numUsers, totalBalance }) {
    return (
        <>
            <div className="main-menu">Main menu</div>
            <div className="statistics">
                <div className="client-number">
                    Number of clients: {numUsers}
                </div>
                <div>Total amount of funds: {`${totalBalance}€`}</div>
            </div>
        </>
    );
}

export default Menu;
