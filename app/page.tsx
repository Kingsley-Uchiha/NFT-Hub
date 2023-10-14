import Create from "@/components/create/page";
import Footer from "@/components/footer/page";
import Hero from "@/components/hero/page";
import Navbar from "@/components/navbar/page";
import Newsletter from "@/components/newsletter/page";
import Process from "@/components/process/page";
import Wallets from "@/components/wallets/page";
import WhyUs from "@/components/why us/page";


export default function Home() {
  return (
    <main className="pt-40">
      <Navbar />
      <Hero />
      <Wallets />
      <div className="stars bg-stars bg-cover pb-20">
        <WhyUs />
        <Process />
        <Create />
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}
