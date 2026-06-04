import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa"

function SocialSidebar() {

  return (

    <div className="hidden md:block fixed right-[clamp(0.8rem,2vw,2rem)] top-1/2 -translate-y-1/2 z-40">

      <div
        className="
        flex flex-col
        gap-[clamp(0.8rem,1.5vw,1.2rem)]

        bg-black/50
        backdrop-blur-xl

        border border-gold/20

        rounded-[clamp(1rem,2vw,1.5rem)]

        px-[clamp(0.7rem,1vw,1rem)]
        py-[clamp(1rem,2vw,1.5rem)]

        shadow-2xl
        "
      >

        <a
          href="#"
          className="
          text-zinc-300
          hover:text-gold

          transition-colors duration-300

          text-[clamp(1rem,1.4vw,1.4rem)]
          "
        >

          <FaInstagram />

        </a>

        <a
          href="#"
          className="
          text-zinc-300
          hover:text-gold

          transition-colors duration-300

          text-[clamp(1rem,1.4vw,1.4rem)]
          "
        >

          <FaTiktok />

        </a>

        <a
          href="#"
          className="
          text-zinc-300
          hover:text-gold

          transition-colors duration-300

          text-[clamp(1rem,1.4vw,1.4rem)]
          "
        >

          <FaYoutube />

        </a>

        <a
          href="https://wa.me/3015725565?text=Hola%20quiero%20información%20sobre%20el%20café"
          target="_blank"
          rel="noopener noreferrer"
          className="
          text-zinc-300
          hover:text-gold

          transition-colors duration-300

          text-[clamp(1rem,1.4vw,1.4rem)]
          "
        >

          <FaWhatsapp />

        </a>

      </div>

    </div>

  )
}

export default SocialSidebar