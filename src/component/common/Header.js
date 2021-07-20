import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Header =()=>{
    return(
        <header>
            <h1>Header</h1>
               <div>
                <nav className='fixed-top navbar  navbar-expand-lg navbar-dark bg-dark'>
                <span className='navbar-brand'>
                        <Link to={"/"}>Acme.com</Link>
                    </span>
                <button 
                        className="navbar-toggler"
                        type="button"
                        data-toggel="collapse"
                        data-target="#navbarToggler"
                        aria-controls="navbarToggler"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    > on click  
                     <span className="navbar-toggle-icon" />   
                    </button>
                    </nav>
                    </div>
                    </header>
    );
}


// const Header =(cartData,handleApplyClick)=>{
//     return(
//         <header>
//         <div>
//             <nav className='fixed-top navbar  navbar-expand-lg navbar-dark bg-dark'>
//             <span className='navbar-brand'>
//                 <Link to={"/"}>Acme.com</Link>
//             </span>
//             <button 
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggel="collapse"
//                 data-target="#navbarToggler"
//                 aria-controls="navbarToggler"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//             >
//              <span className="navbar-toggle-icon" />   
//             </button>
//             {/* <DashboardFilter handleApplyClick={handleApplyClick} /> */}
//             <div
//                 className="collapse navbar-collapse justify-content-end"
//                 id="navbarToggler"
//             >
//                 <ul className="navbar-nav">
//                     <li className="new-item">
//                         <Link to={routes.CART_ROUTE}>
//                         {""}
//                         <span className="nav-link active">  
//                         {""}
//                         {/* <Badge count={cartData.cartcount} />{""} */}
//                         </span>{""}
//                         </Link>

//                     </li>

//                 </ul>

//             </div>
//             </nav>
//         </div>
//         </header>
//     );
// };

Header.propTypes ={
    cartData: PropTypes.any,
    handleApplyClick: PropTypes.func.isRequired
};

export default Header;