import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"

export default function ButtonsPage() {
  return (
  <div className="flex flex-col items-center gap-3 w-full max-w-xl">
    <a
      href="https://www.instagram.com/morelifersl/"
      target="_blank"
      className="
        w-full max-w-md
        mt-4 inline-flex items-center justify-center gap-2
        px-6 py-4
        text-white font-semibold text-lg
        rounded-xl
        backdrop-blur-md
        bg-white/10
        border border-white/20
        shadow-lg
        hover:bg-white/20
        hover:shadow-xl
        transition-all duration-300
      "
    >
      <FaInstagram size={18} />
      Instagram
    </a>

    <a
      href="https://chat.whatsapp.com/IaDLqM5aVj16M8SamyB2kx"
      target="_blank"
      className="
        w-full max-w-md
        mt-4 inline-flex items-center justify-center gap-2
        px-6 py-4
        text-white font-semibold text-lg
        rounded-xl
        backdrop-blur-md
        bg-white/10
        border border-white/20
        shadow-lg
        hover:bg-white/20
        hover:shadow-xl
        transition-all duration-300
      "
    >
      <FaWhatsapp size={18} />
      WhatsApp
    </a>

    <a
      href="https://maps.app.goo.gl/g9PwPQsrzZuLs9qB6"
      target="_blank"
      className="
        w-full max-w-md
        mt-4 inline-flex items-center justify-center gap-2
        px-6 py-4
        text-white font-semibold text-lg
        rounded-xl
        backdrop-blur-md
        bg-white/10
        border border-white/20
        shadow-lg
        hover:bg-white/20
        hover:shadow-xl
        transition-all duration-300
      "
    >
      <FaMapMarkerAlt size={18} />
      Localização
    </a>
  </div>
  );
}
