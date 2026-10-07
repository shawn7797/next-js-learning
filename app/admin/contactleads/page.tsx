import { neon } from "@neondatabase/serverless";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LeadPoller from "@/components/utils/LeadPoller";

export default async function ContactLeadsPage() {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (role !== "admin") {
    redirect("/");
  }

  const sql = neon(process.env.DATABASE_URL!);
  const leads = await sql`
    SELECT * FROM contact_leads ORDER BY created_at DESC
  `;

  return (
    <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <LeadPoller />
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Admin Dashboard — Contact Leads
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Review form submissions from your platform's contact page.
        </p>
      </div>

      {leads.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-500">No contact leads submitted yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 uppercase font-semibold text-xs">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Date Received</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
              {leads.map((lead: any) => (
                <tr
                  key={lead.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4 text-indigo-600 dark:text-indigo-400">
                    {lead.email}
                  </td>
                  <td className="px-6 py-4 max-w-sm truncate">
                    {lead.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-400">
                    {new Date(lead.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
