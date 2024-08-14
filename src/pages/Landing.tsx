
import Footer from "../components/Footer"
import Header from "../components/Header"
import ClientsOpinion from "../components/sections/ClientsOpinion"
import ContactUs from "../components/sections/ContactUs"
import Main from "../components/sections/Main"
import OurAttorneys from "../components/sections/OurAttorneys"
import PracticeAdvice from "../components/sections/PracticeAdvice"
import WhoWeAre from "../components/sections/WhoWeAre"

const Landing = () => {
  return (
    <div className="bg-red-100 min-h-screen w-full">
      <main className="bg-custom min-h-screen">
      <Header></Header>
        <Main/>
      </main>
      <PracticeAdvice/>
      <WhoWeAre/>
      <ClientsOpinion/>
      <OurAttorneys/>
      <ContactUs/>
      <Footer></Footer>
    </div>
  )
}

export default Landing
