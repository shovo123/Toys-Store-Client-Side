import logo from '../../../assets/Logo.png';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-700 text-base-100"  
        >
            <div>
                <img src={logo} style={{width:70}} alt="" />
                <h2 className='text-xl font-bold'>UNIQUE TOYS</h2>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Shiping Free</a>
                <a className="link link-hover">Home Delivery</a>
                <a className="link link-hover">Money Return</a>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <a className="link link-hover">facebook</a>
                <a className="link link-hover">twitter</a>
                <a className="link link-hover">linkedin</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;