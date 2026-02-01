import React from "react";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Umik's Kitchen
            </h3>
            <p className="text-cream-light text-sm leading-relaxed">
              Catering rumahan berkualitas dengan resep warisan dan bahan segar.
              Melayani berbagai acara dengan cita rasa autentik khas Situbondo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/tanya-ai"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  Tanya AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-cream-light text-sm">
                  Situbondo, Jawa Timur
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="https://wa.me/6285141016579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  +62 851-4101-6579
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:umikskitchen@example.com"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  umikskitchen@example.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-cream-light text-sm">
            &copy; {currentYear} Umik's Kitchen. Dibuat dengan ❤️ di Situbondo.
          </p>
        </div>
      </div>
    </footer>
  );
}
