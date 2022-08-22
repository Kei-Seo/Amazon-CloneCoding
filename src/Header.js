import { ShoppingBasket } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { useStateValue } from "./StateProvider";

function Header({ children }){

    const [{basket}, dispatch] = useStateValue();

    return (
        <>
            <div className="header">
                <Link to ="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''
                    />
                    </Link>
                    <div className="header_search">
                        <input className="header_search_input" type="text"/>
                        <SearchIcon className = "header_searchIcon"/>
                    </div>
            
                <div className="header_nav">

                    <div className="header_option">
                        <span className="header_optionLineOne"> 안녕하세요! </span>
                        <Link to="/login" className="homelogin">
                        <span className="header_optionLineTwo"> 로그인하기 </span>
                        </Link>
                    </div>

                    <div className="header_option">
                        <span className="header_optionLineOne"> 돌아가기 </span>
                        <span className="header_optionLineTwo"> 주문내역 </span>
                    </div>

                    <div className="header_option">
                        <span className="header_optionLineOne"> 반가워요 </span>
                        <span className="header_optionLineTwo"> 로그인하기 </span>
                    </div>
                    <Link to = "/checkout">
                        <div className="header_optionBasket">
                            <ShoppingBasket/>
                            <span className="header_optionLineTwoheader_basketCount">
                                {basket?.length}
                            </span>
                        </div>
                    </Link>

                </div>
            </div>
            { children }
        </>
        
    );
}

export default Header;