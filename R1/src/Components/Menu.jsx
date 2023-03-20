function Menu({ numUsers, totalBalance }) {
    return (
        // <>
        //     <div className="main-menu">Main menu</div>
        //     <div className="statistics">
        //         <div className="client-number">
        //             Number of clients: {numUsers}
        //         </div>
        //         <div>Total amount of funds: {`${totalBalance}€`}</div>
        //     </div>
        // </>
        <div className="menu-stats">
            <div className="menu-stat">
                <span className="menu-stat-label">Total number of users:</span>{" "}
                <span className="menu-stat-value">{numUsers}</span>
            </div>
            <div className="menu-stat">
                <span className="menu-stat-label">Total amount of funds:</span>{" "}
                <span className="menu-stat-value">{totalBalance} €</span>
            </div>
            <div className="menu-stat">
                <span className="menu-stat-label">
                    Average account balance:
                </span>{" "}
                <span className="menu-stat-value">
                    {totalBalance / numUsers} €
                </span>
            </div>
            <div className="menu-image-container">
                <img src="../../public/BankImage.jpg" alt="React Bank" />
                <div className="menu-image-text">
                    <h2>About React Bank</h2>
                    <p>
                        React Bank is a project that has been a real challenge
                        to create, but it has been a success. With the help of
                        React and Express, we were able to build a simple and
                        efficient banking application that allows users to
                        manage their funds with ease.
                    </p>
                    <p>
                        The development process was not without its
                        difficulties, but we were able to overcome them through
                        careful planning and teamwork. We are proud of the end
                        result, and we hope that our users will find it useful
                        and enjoyable to use.
                    </p>
                    <p>
                        Thank you for choosing React Bank, and we look forward
                        to serving you in the future.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Menu;
