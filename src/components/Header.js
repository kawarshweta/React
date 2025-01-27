import {LOGO_URL} from "../utils/constants"
const Header = () => {
    return (
        <div className="flex justify-between px-8 border-b-2">
            <div>
                <img className="w-24" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>Service</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div> 
    )
}

export default Header;