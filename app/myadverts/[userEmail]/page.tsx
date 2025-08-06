import UserAds from "@/components/userAds";
import { fetchUserAds } from "@/lib/fetchData";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // adjust path if needed

export default async function MyAdvertsPage() {
  // Get current user session
  const session = await getServerSession(authOptions);

  // If not logged in
  if (!session?.user?.email) {
    return (
      <p className="text-center py-10 text-gray-500">
        Please log in to view your adverts.
      </p>
    );
  }

  // Fetch ads for logged-in user
  const ads = await fetchUserAds(session.user.email);

  return (
    <div className="max-w-5xl mx-auto py-5">
      <h2 className="text-2xl font-bold mb-5 text-center">
        My Adverts
      </h2>

      {ads?.length ? (
        <div className="grid gap-4">
          {ads.map((ad: any) => (
            <UserAds data={ad} key={ad.id} />
          ))}
        </div>
      ) : (
        <p className="text-center py-10 text-gray-400">
          You haven’t posted any adverts yet.
        </p>
      )}
    </div>
  );
}
