import { Link } from "react-router-dom"

const Button = ({ text, path }) => {
    return (
        <button className="bg-gradient-to-br from-[#FFD738] to-accent px-5 py-2 rounded mt-5 text-white font-semibold text-xl transition-all hover:scale-105 duration-200 ease-linear">
            <Link to={path}>
                {text}
            </Link>
        </button>
    )
}

export default Button