import { anuphan } from "../fonts"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className={`min-h-screen bg-sky-200 flex flex-col ${anuphan.variable}`}>
      {/* Navigation */}
      <nav className="bg-yellow-400 px-4 py-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto">
          <ul className="flex justify-center items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-gray-800 font-medium px-4 py-2 rounded transition-all duration-300 hover:bg-white/30 hover:text-orange-600 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/subject-study"
                className="text-gray-800 font-medium px-4 py-2 rounded transition-all duration-300 hover:bg-white/30 hover:text-orange-600 relative group"
              >
                Subject Study
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-gray-800 font-medium px-4 py-2 rounded transition-all duration-300 bg-white/30 text-orange-600 relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Portfolio Page Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 space-y-6">
            <h1 className="font-anuphan text-4xl font-bold text-gray-800">MY History</h1>
            <p className="font-anuphan text-lg text-gray-700">เธอยังไม่รู้จักเราล่ะสิ มาทำความรู้จักกันเถอะ</p>
          </div>

          {/* Vertical Profile Section */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 mt-6">
            <div className="flex flex-col items-center space-y-12">
              {/* First Profile */}
              <div className="flex items-center justify-center gap-8 w-full max-w-4xl">
                <a
                  href="https://www.instagram.com/85earn?igsh=YmxybDg5Mmc1N3Zi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-80 h-80 rounded-lg bg-white border-4 border-gray-300 overflow-hidden shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <img src="/images/profile1.jpg" alt="Profile 1" className="w-full h-full object-cover" />
                </a>

                {/* Text Frame Beside */}
                <div className="flex-1 max-w-md p-6 rounded-lg border-2 border-[#ffeb3b] bg-[#ffeb3b]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="font-anuphan text-2xl font-bold text-gray-800">Patcharee Singkham</div>
                    <img src="/images/instagram-logo.jpg" alt="Instagram" className="w-8 h-8 rounded-lg" />
                  </div>
                  <div className="font-anuphan text-lg text-gray-700 leading-relaxed">B: 3-05-2007 18y</div>
                  <div className="font-anuphan text-base text-gray-600 mt-2">ใฝ่เรียนรู้และหาประสบการณ์ที่น่าสนใจ</div>
                </div>
              </div>

              {/* Second Profile */}
              <div className="flex items-center justify-center gap-8 w-full max-w-4xl">
                <a
                  href="https://www.instagram.com/msvsxyy?igsh=cWRibnJwdDFubXFp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-80 h-80 rounded-lg bg-white border-4 border-gray-300 overflow-hidden shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <img src="/images/profile2.jpg" alt="Profile 2" className="w-full h-full object-cover" />
                </a>

                {/* Text Frame Beside */}
                <div className="flex-1 max-w-md p-6 rounded-lg border-2 border-[#ffeb3b] bg-[#ffeb3b]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="font-anuphan text-2xl font-bold text-gray-800">Bunsita Oareevong</div>
                    <img src="/images/instagram-logo2.jpg" alt="Instagram" className="w-8 h-8 rounded-lg" />
                  </div>
                  <div className="font-anuphan text-lg text-gray-700 leading-relaxed">B: 23-05-2006 19y</div>
                  <div className="font-anuphan text-base text-gray-600 mt-2">ทักษะและความเชี่ยวชาญในด้านต่างๆ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
