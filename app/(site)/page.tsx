import AllAds from "@/components/AllAds";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Slider from "@/components/slider";
import { fetchAllAds } from "@/lib/fetchData";

export default async function Home() {
  const allAds = await fetchAllAds(); // Server-side fetch from Firestore

  return (
    <main>
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-700">
        <Header />
      </div>

      {/* Main layout */}
      <div className="max-w-6xl mx-auto flex mt-3">
        {/* Sidebar menu (visible on large screens) */}
        <div className="hidden lg:inline mr-5">
          <Menu />
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Slider only on large screens */}
          <div className="hidden lg:inline">
            <Slider />
          </div>

          {/* Display all ads */}
          <AllAds />
        </div>
      </div>
    </main>
  );
}