export default function DestinationsPage({ params }: { params: { "workspace-id": string } }) {
  const workspaceId = params["workspace-id"]; // Extract the workspace ID from params

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Destinations for Workspace: {workspaceId}
        </h1>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-60 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option>All statuses</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700">
          + New destination
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Table Header */}
        <div className="grid grid-cols-5 items-center text-gray-600 font-medium text-sm border-b border-gray-200 p-4">
          <div>Name</div>
          <div>Connector</div>
          <div>Source</div>
          <div>Last Sync</div>
          <div>Status</div>
        </div>

        {/* Example Rows */}
        <div className="grid grid-cols-5 items-center text-gray-800 text-sm p-4 hover:bg-gray-50">
          <div>Mock Destination 1</div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
            <span>Mock Connector</span>
          </div>
          <div>Mock Source 1</div>
          <div>2 days ago</div>
          <div className="flex items-center justify-center text-green-600">
            <span className="w-4 h-4 bg-green-600 rounded-full"></span>
            <span className="ml-2">1</span>
          </div>
        </div>

        <div className="grid grid-cols-5 items-center text-gray-800 text-sm p-4 hover:bg-gray-50">
          <div>Mock Destination 2</div>
          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
            <span>Another Connector</span>
          </div>
          <div>Mock Source 2</div>
          <div>4 days ago</div>
          <div className="flex items-center justify-center text-gray-400">
            <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
            <span className="ml-2">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

