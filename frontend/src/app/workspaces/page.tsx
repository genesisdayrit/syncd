import Link from "next/link";

export default function WorkspacesPage() {
  const workspaces = []; // Example: empty list for testing empty state

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Workspaces</h1>
        {workspaces.length > 0 && (
          <Link
            href="/workspaces/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            + Create Workspace
          </Link>
        )}
      </div>

      {/* Workspaces Table or Empty State */}
      {workspaces.length > 0 ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-2 items-center text-gray-600 font-medium text-sm border-b border-gray-200 p-4">
            <div>Workspace Name</div>
            <div className="text-right">Actions</div>
          </div>

          {/* Table Rows */}
          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              className="grid grid-cols-2 items-center text-gray-800 text-sm p-4 hover:bg-gray-50"
            >
              <div>{workspace.name}</div>
              <div className="text-right">
                <Link
                  href={`/workspaces/${workspace.id}/connections`}
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Go to Workspace
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-lg font-medium text-gray-600 mb-4">
            Create your first workspace
          </p>
          <Link
            href="/workspaces/create"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            + Create Workspace
          </Link>
        </div>
      )}
    </div>
  );
}

