import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Security from "../components/Security";
import UseCases from "../components/UseCases";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Divider />
      <UseCases />
      <Divider />
      <Security />
      <Divider />
      <Footer />
    </main>
  );
}
