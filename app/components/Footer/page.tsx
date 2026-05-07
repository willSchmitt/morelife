import Image from "next/image"
import { BsTelephone } from "react-icons/bs"

export default function FooterPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <Image
        src="/icon.png"
        alt="More Life Logo"
        width={50}
        height={50}
      />
      <p className="max-w-md mt-4 text-white-700 font-poppins">
        Encontro todos os sábados às 20h!
      </p>

      <div className="w-full mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">

        <p className="text-sm text-white/70 text-center font-medium">
          Somente para maiores de 18 anos.
        </p>

        <a
          href="https://wa.me/554796960055?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20More%20Life!"
          target="_blank"
          className="
            mt-4 flex w-full items-center justify-center gap-2
            rounded-xl border border-white/10
            bg-white/10 px-4 py-3
            text-sm font-semibold text-white
            transition-all duration-300
            hover:bg-white/20
            hover:scale-[1.02]
            active:scale-[0.98]
          "
        >
          <BsTelephone size={16} />
          Tem alguma dúvida? Entre em contato!
        </a>

      </div>
    </div>
  )
}
