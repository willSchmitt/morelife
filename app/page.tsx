import ButtonsPage from "./components/Buttons/page"
import HeaderPage from "./components/Header/page"
import FooterPage from "./components/Footer/page"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/60 px-6 py-8">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-5">
        <HeaderPage />
        <ButtonsPage />
        <FooterPage />
      </div>
    </main>
  )
}
