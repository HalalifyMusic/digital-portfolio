import ProjectForm from "@/components/ProjectForm";
import { getProjects } from "@/actions/projects";
import { notFound } from "next/navigation";

export default async function EditProjectPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const projects = await getProjects();
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container" style={{ padding: "4rem 0" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Edit Project</h1>
            <ProjectForm initialData={project} />
        </div>
    );
}
