import "./style.scss";
import { Routes,Route,Link } from 'react-router-dom';

const StartPage=()=>{
    return(
        <div className="a">
         <Link to="/Toys">начать</Link>
        </div>
    )
}
export default StartPage;