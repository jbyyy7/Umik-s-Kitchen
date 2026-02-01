import React from "react";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.webp" 
                alt="Umik's Kitchen Logo" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-2xl font-playfair font-bold\">
                Umik's Kitchen
              </h3>
            </div>
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
                <a
                  href="https://maps.google.com/?q=Umik's+Kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  KP. Tanjung Glugur Selatan RT01 RW02, Mangaran, Situbondo
                </a>
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
                  href="mailto:umikskitchen@gmail.com"
                  className="text-cream-light hover:text-white transition-colors text-sm"
                >
                  umikskitchen@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com/Umik's Kitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/umikskitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@umiks.kitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
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
