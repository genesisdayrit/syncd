import Link from "next/link";

export default function WorkspacesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { "workspace-id": string };
}) {
  const workspaceId = params["workspace-id"]; // Get workspace ID from the route

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 border-r border-gray-300 flex flex-col">
        {/* Sidebar Header */}
        <div className="py-4 px-6 text-lg font-semibold text-gray-800 border-b border-gray-300">
          <Link href="/" className="hover:underline">
            syncd
          </Link>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-grow">
          <ul className="space-y-2 mt-4">
            <li>
              <Link
                href={`/workspaces/${workspaceId}/connections`}
                className="block py-2 px-6 text-gray-800 hover:bg-gray-200"
              >
                Connections
              </Link>
            </li>
            <li>
              <Link
                href={`/workspaces/${workspaceId}/sources`}
                className="block py-2 px-6 text-gray-800 hover:bg-gray-200"
              >
                Sources
              </Link>
            </li>
            <li>
              <Link
                href={`/workspaces/${workspaceId}/destinations`}
                className="block py-2 px-6 text-gray-800 hover:bg-gray-200"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href={`/workspaces/${workspaceId}/builder`}
                className="block py-2 px-6 text-gray-800 hover:bg-gray-200"
              >
                Builder
              </Link>
            </li>
            <li>
              <Link
                href={`/workspaces/${workspaceId}/settings`}
                className="block py-2 px-6 text-gray-800 hover:bg-gray-200"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-white">{children}</main>
    </div>
  );
}

