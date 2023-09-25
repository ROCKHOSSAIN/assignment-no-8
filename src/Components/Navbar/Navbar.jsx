import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row  items-center justify-between mt-5 font-bold ">
            <div className="mt-10 md:mt-0">
                <img src="../../../images/Logo.png" alt="" />
            </div>
            <nav>
                <ul className="flex gap-9 mt-4 md:mt-0">

                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donations"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Donations
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>

                </ul>
            </nav>
        </div>
        
    );
};

export default Navbar;