import Image from "next/image"

export default function HeaderPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <Image
        src="/Identidade-Morelife-branca.png"
        alt="More Life Logo"
        width={200}
        height={200}
      />
      <p className="max-w-md mt-4 text-base md:text-lg text-white leading-relaxed">
        O MORE LIFE é mais do que um encontro de jovens. Somos uma geração apaixonada por Jesus, vivendo com propósito, amor ao próximo e fome de transformar o mundo através de Deus
      </p>
    </div>
  )
}
