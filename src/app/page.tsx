import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center px-8 py-24">
        <p className="text-pink-500 font-medium text-sm tracking-widest uppercase mb-4">Beauty · Confidence · Grace</p>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          The World Stage for<br />
          <span className="text-pink-500">Beauty Pageants</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          Join competitions, get discovered by expert juries, and let the world vote for you on GlamWorld.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/competitions" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl text-sm font-semibold transition shadow-md shadow-pink-200">
            View Competitions
          </Link>
          <Link href="/register" className="border border-pink-200 hover:border-pink-400 text-pink-500 px-8 py-3 rounded-xl text-sm font-semibold transition">
            Register as Contestant
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-8 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Public Voting", desc: "Let the world decide. Fans vote for their favourite contestants in real time." },
          { title: "Jury Scoring", desc: "Expert judges score contestants on presentation, confidence, styling, and more." },
          { title: "Public Profiles", desc: "Each contestant gets a shareable profile page to showcase their portfolio." },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
