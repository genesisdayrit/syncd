"use client";

import { useState } from "react";

export default function CreateWorkspacePage() {
  const [workspaceName, setWorkspaceName] = useState("");

  const handleCreateWorkspace = () => {
    // Logic to handle workspace creation (e.g., API call)
    alert(`Workspace "${workspaceName}" created!`);
    // Optionally redirect to the workspace page after creation
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Create Workspace</h1>
        <div className="mb-4">
          <label htmlFor="workspaceName" className="block text-sm font-medium text-gray-700">
            Workspace Name:
          </label>
          <input
            id="workspaceName"
            type="text"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            placeholder="Enter workspace name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          onClick={handleCreateWorkspace}
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
}

