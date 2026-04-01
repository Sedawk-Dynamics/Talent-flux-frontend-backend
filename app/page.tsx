import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Industries } from "@/components/industries"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FeaturedSections } from "@/components/featured-sections"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FeaturedSections />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <CallToAction />
      <Footer />
    </main>
  )
}
