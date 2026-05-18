import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa"

function SocialSidebar() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      
      <div className="flex flex-col gap-4 bg-black/40 backdrop-blur-xl border border-[#C8A46B]/20 rounded-3xl p-4 shadow-2xl">

        <a
          href="#"
          className="text-white hover:text-[#C8A46B] transition text-2xl"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          className="text-white hover:text-[#C8A46B] transition text-2xl"
        >
          <FaTiktok />
        </a>

        <a
          href="#"
          className="text-white hover:text-[#C8A46B] transition text-2xl"
        >
          <FaYoutube />
        </a>

        <a
          href="https://wa.me/3015725565?text=Hola%20quiero%20información%20sobre%20el%20café"
           target="_blank"
           rel="noopener noreferrer"
          className="text-white hover:text-[#C8A46B] transition text-2xl"
        >
          <FaWhatsapp />
        </a>

      </div>
    </div>
  )
}

export default SocialSidebar