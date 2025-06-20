import { anuphan } from "./fonts"
import Link from "next/link"

export default function HomePage() {
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
                className="text-gray-800 font-medium px-4 py-2 rounded transition-all duration-300 hover:bg-white/30 hover:text-orange-600 relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Page Content - Static (No longer editable) */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 space-y-6">
            {/* Static Thai Typography */}
            <div className="space-y-6">
              <div className="font-anuphan text-4xl font-bold text-gray-800">MY RUSH PROJECT</div>
              <div className="font-anuphan text-3xl font-medium text-gray-700">
                Welcome everyone who visits our page😆
              </div>
              <div className="font-anuphan text-xl font-normal text-gray-600">หวังว่าพวกคุณจะรู้จักเรามากยิ่งขึ้น</div>
            </div>
          </div>

          {/* Additional static content section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-6">
            <div className="font-anuphan text-2xl font-medium text-gray-800 mb-4">
              💘This is the first time we've met.
            </div>
            <div className="font-anuphan text-lg font-normal text-gray-600 leading-relaxed">
              This is a special magic from the fairy. Listen to some of the sounds.
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-6">
            <h2 className="font-anuphan text-2xl font-medium text-gray-800 mb-8 text-center">🎬 คลิกเพื่อดูวิดีโอ</h2>
            <div className="flex justify-center items-center">
              <a
                href="https://youtu.be/p1mMgua9hrA?si=pNMeT06LSc935rVN"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  className="w-[480px] max-w-[90%] rounded-xl shadow-[0_6px_15px_rgba(0,0,0,0.2)] transition-transform duration-[250ms] ease-out cursor-pointer hover:scale-105"
                  src="/images/sunset.jpg"
                  alt="คลิกเพื่อชมวิดีโอบน YouTube"
                />
              </a>
            </div>
            <p className="font-anuphan text-center text-gray-600 mt-4">คลิกที่รูปภาพเพื่อเปิดวิดีโอใน YouTube</p>
          </div>
        </div>
      </div>
    </div>
  )
}
