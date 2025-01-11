import Link from "next/link";

export default function WorkspacesPage() {
  const workspaces = [
    { id: "workspace-1", name: "Workspace One" },
    { id: "workspace-2", name: "Workspace Two" },
    { id: "workspace-3", name: "Workspace Three" },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Workspaces</h1>
        <Link
          href="/workspaces/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          + Create Workspace
        </Link>
      </div>

      {/* Workspaces List */}
      <ul className="space-y-4">
        {workspaces.map((workspace) => (
          <li
            key={workspace.id}
            className="p-4 bg-gray-100 border border-gray-300 rounded-md flex justify-between items-center"
          >
            <span>{workspace.name}</span>
            <Link
              href={`/workspaces/${workspace.id}/connections`}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Go to Workspace
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

