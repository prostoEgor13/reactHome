import "./style.scss";
import { Routes,Route,Link } from 'react-router-dom';
import mainpic from '../StartPage/img/aleksei-ezhkov-tdzktAdGOHg-unsplash.jpg'

const StartPage=()=>{
    return(
        <>
            <div className="wrapper">
                <div className="main_block">
                   

                    <div className="center_block">
                        <p>помогите бабушке</p>
                        <p>нарядить елку</p>
                    </div>
                    <div className="button button_start">
                    <Link to="/Toys"className="Link"><p className="p_button_start">начать</p></Link>
                     </div>
                </div>
            
          
            </div>
            <footer className="footer">
              
                <div className="created footer_created ">
                    <p>created by Egor Zhirkov</p>
                </div>
                <div className="logo footer_logo">
                    <h1>Logo</h1>
                </div>
            </footer>
        </>
    )
}
export default StartPage;