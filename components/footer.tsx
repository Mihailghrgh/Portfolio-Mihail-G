import { Component as BgGradient } from "@/components/ui/bg-gradient";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      <BgGradient
        gradientFrom="#2a2a2a"
        gradientTo="#000000"
        gradientSize="200% 100%"
        gradientPosition="50% 0%"
        gradientStop="0%"
        className="bg-black opacity-80"
      />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light mb-4">Michael George</h3>

            <div className="space-y-2">
              <div>
                <p className="text-white/60 text-xs mb-1">Email</p>
                <p className="text-sm">mihailghrgh@gmail.com</p>
              </div>
              <div>
                <p className="text-white/60 text-xs mb-1">Phone</p>
                <p className="text-sm">+44 743 587 9246</p>
                <p className="text-sm">+40 736 980 541</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-xs">
            ©2025 Mihail Gheorghe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
