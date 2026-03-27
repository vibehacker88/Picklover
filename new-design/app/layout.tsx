import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Global styles

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAP-GRU | Clifford A. Pickover & GRU",
  description: "Offizielle Website der CAP-GRU: Clifford A. Pickover und Glavnoye Razvedyvatelnoye Upravlenie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${inter.className} bg-[#e5e5e5] text-gray-800 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <div className="w-full max-w-5xl mx-auto bg-white min-h-screen shadow-2xl flex flex-col my-0 md:my-8 border-t-8 border-[#1a365d]">
          {/* Header */}
          <header className="bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-200">
            <div>
              <h1 className="text-5xl font-extrabold text-[#1a365d] tracking-tight mb-2">
                CAP-GRU
              </h1>
              <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
                Clifford A. Pickover & Glavnoye Razvedyvatelnoye Upravlenie
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right text-xs text-gray-500 border-l-4 border-red-600 pl-4">
              <p className="font-bold text-gray-700">
                Institut für multidimensionale
              </p>
              <p>Aufklärung und Mathematik e.V.</p>
              <p className="mt-1">Celle / Moskau / Hyperraum</p>
            </div>
          </header>

          {/* Main Content Area (Nav is inside page.tsx) */}
          {children}

          {/* Footer */}
          <footer className="bg-gray-100 border-t border-gray-300 text-gray-600 text-xs p-8 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>
                &copy; 2026 CAP-GRU e.V. Alle Rechte vorbehalten. (Design in Anlehnung
                an VRH-Celle)
              </p>
              <div className="space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-[#1a365d] hover:underline">
                  Impressum
                </a>
                <a href="#" className="hover:text-[#1a365d] hover:underline">
                  Datenschutz
                </a>
                <a href="#" className="hover:text-[#1a365d] hover:underline">
                  Verschlüsselungsprotokolle
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
