import { redirect } from "next/navigation";

export default function WorkspaceRedirect({ params }: { params: { "workspace-id": string } }) {
  const workspaceId = params["workspace-id"];

  // If the route is not `/create`, redirect to `/connections`
  if (workspaceId !== "create") {
    redirect(`/workspaces/${workspaceId}/connections`);
  }

  // If it's `/create`, do nothing (allow rendering of the create page)
  return null;
}

