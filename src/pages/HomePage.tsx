import Footer from "../components/Footer"
import Terminal from "../components/Terminal"

export default function HomePage() {
  return (
    <div className="bg-wallpaper bg-cover grid grid-rows-[93%,7%] h-screen  ">

      <div className="text-white flex justify-center items-center">
        <Terminal></Terminal>
      </div>
      <Footer></Footer>
    </div>
  )
}
