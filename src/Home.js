import React from "react";
import './Home.css'
import Product from "./Product";

function Home(){
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/Soju/Fuji_LP_Header_Soju_en_US.png"
                alt=""/>

                <div className="home_row">
                    <Product id="2323" title="갤럭시s21" price={782000} 
                    image="https://phone4yomall.com/data/item/1624951212/S21_.jpg"
                    rating={5}/>

                    <Product id="2324" title="갤럭시s22" price={922000} 
                    image="https://images.samsung.com/kdp/goods/2022/01/25/1a99518e-eecf-4555-ad68-54386ba26315.png?$PD_GALLERY_L_PNG$"
                    rating={5}/>
                </div>

                <div className="home_row">
                    <Product id="2325" title="갤럭시s22" price={922000} 
                        image="https://images.samsung.com/kdp/goods/2022/01/25/1a99518e-eecf-4555-ad68-54386ba26315.png?$PD_GALLERY_L_PNG$"
                        rating={5}/>
                    <Product id="2326" title="갤럭시s22" price={922000} 
                        image="https://images.samsung.com/kdp/goods/2022/01/25/1a99518e-eecf-4555-ad68-54386ba26315.png?$PD_GALLERY_L_PNG$"
                        rating={5}/>
                    <Product id="2327" title="갤럭시s22" price={922000} 
                        image="https://images.samsung.com/kdp/goods/2022/01/25/1a99518e-eecf-4555-ad68-54386ba26315.png?$PD_GALLERY_L_PNG$"
                        rating={5}/>

                </div>

                <Product id="2328" title="갤럭시s22" price={922000} 
                        image="https://images.samsung.com/kdp/goods/2022/01/25/1a99518e-eecf-4555-ad68-54386ba26315.png?$PD_GALLERY_L_PNG$"
                        rating={5}/>

            </div>

        </div>
    );
} 

export default Home;