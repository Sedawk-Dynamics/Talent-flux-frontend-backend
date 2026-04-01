import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/talent-20flux-20logo-20png.png"
              alt="TalentFlux Logo"
              width={252}
              height={84}
              className="h-16 w-auto mb-4 scale-110"
            />
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              Your strategic partner in talent acquisition and career development. We connect exceptional professionals
              with opportunities that drive growth and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="text-muted-foreground hover:text-primary transition-colors">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-muted-foreground hover:text-primary transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/branding" className="text-muted-foreground hover:text-primary transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">+91-7703881471</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">inquiry@talentflux.co.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">C2-101, 1st Floor, Supertech Ecovillage 2, Greater Noida West, Noida, Gautam Buddha Nagar-201306</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} TalentFlux People Partner Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
