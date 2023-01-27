import css from "./Toys/Toys.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Footer = ({ createdBy="default created by", logo="default logo" }) => {
  return (
    <footer className={cn(css.Toys__footer)}>
      <div className={cn(css.Toys__footerCreatedBy)}>
        <p>{createdBy}</p>
      </div>
      <div className={cn(css.Toys__logoImg)}>
        <h1>{logo}</h1>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  createdBy:PropTypes.string,
  logo:PropTypes.string,
};
export default Footer;
