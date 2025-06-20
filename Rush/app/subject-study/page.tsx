import { anuphan } from "../fonts"
import Link from "next/link"

export default function SubjectStudyPage() {
  return (
    <div className={`min-h-screen bg-sky-200 flex flex-col ${anuphan.variable} relative`}>
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
                className="text-gray-800 font-medium px-4 py-2 rounded transition-all duration-300 bg-white/30 text-orange-600 relative group"
              >
                Subject Study
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"></span>
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

      {/* Subject Study Page Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 space-y-6">
            <h1 className="font-anuphan text-4xl font-bold text-gray-800">
              Bachelor of Science in Industrial Education Program in Design Education
            </h1>
            <div className="space-y-4">
              <p className="font-anuphan text-lg text-gray-700 leading-relaxed">
                มุ่งเน้นผลิตบัณฑิตที่มีความรู้และทักษะการประยุกต์ใช้ศาสตร์ทางการออกแบบและเทคโนโลยีเพื่อสร้างนวัตกรรมสนับสนุนการพัฒนาประเทศอย่างมั่นคงและยั่งยืนรวมถึงส่งเสริมการวิจัยการออกแบบให้ตอบโจทย์ความต้องการภาคอุตสาหกรรมในยุคปัจจุบัน
              </p>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-6">
            <div className="flex justify-center items-center gap-8">
              <div className="flex-1 max-w-sm">
                <img
                  src="/images/design-contest.png"
                  alt="Innovation Design Contest 2019"
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 max-w-sm">
                <img
                  src="/images/design-exhibition.png"
                  alt="Design Exhibition and Car Design Projects"
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 max-w-sm">
                <img
                  src="/images/design-projects.png"
                  alt="Student Design Projects and Corporate Identity Work"
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Skill Mapping Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-6">
            <h2 className="font-anuphan text-2xl font-medium text-gray-800 mb-6 text-center">
              โอกาสในการหางานและเส้นทางอาชีพ
            </h2>
            <div className="flex justify-center">
              <img
                src="/images/skill-mapping.png"
                alt="Career Opportunities and Skill Mapping for Design Education"
                className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Small Logo Link in Bottom Right Corner */}
      <div className="fixed bottom-4 right-4 z-40">
        <a
          href="https://siet.kmitl.ac.th/"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-110 transition-transform duration-300"
        >
          <img src="/images/siet-logo.png" alt="SIET KMITL" className="w-12 h-12 rounded-lg shadow-lg" />
        </a>
      </div>
    </div>
  )
}
