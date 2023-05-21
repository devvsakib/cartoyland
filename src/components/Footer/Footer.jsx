import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-secondary text-white pt-10'>
      <div className='max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='border-b-2 pb-10 gap-10 grid grid-cols-1 md:grid-cols-3'>
          <div>
            <h2 className="text-5xl font-semibold font-barlow mb-4">CarToysLand</h2>
            <p>
              <span className="font-semibold">CarToysLand</span> is ecommerce website for car toys. We provide the best quality of car toys. We have a lot of car toys that you can choose. We also provide the best service for you. We have a lot of discount for you. So, what are you waiting for? Let's buy your favorite car toys now!
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold font-barlow mb-4">Follow us on <span className="text-accent">Social</span></h2>
            <ul className="flex flex-col-reverse gap-2">
              <li className="flex items-center gap-2 cursor-pointer hover:text-accent transition duration-300 ease-linear"><FaInstagram /> Instagram</li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-accent transition duration-300 ease-linear"><FaFacebook /> Facebook</li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-accent transition duration-300 ease-linear"><FaLinkedin /> Linkedin</li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-accent transition duration-300 ease-linear"><FaTwitter /> Twitter</li>
            </ul>
          </div>
          <div>
            <div>
              <h2 className="text-2xl font-semibold font-barlow mb-4">Contact Us</h2>
              <div className='flex flex-col gap-2'>
                <p className="flex gap-2 items-center"><FaPhoneAlt /> +62 812 3456 7890</p>
                <p className="flex gap-2 items-center"> <FaEnvelope />
                  info@cartoysland.com
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold font-barlow mb-1 mt-2">Address</h2>
              <p>
                Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111
              </p>
            </div>
          </div>
        </div>
        <p className='text-center py-5'>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer >
  )
}

export default Footer