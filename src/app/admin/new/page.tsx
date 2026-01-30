import ProjectForm from "@/components/ProjectForm";

export default function NewProjectPage() {
    return (
        <div className="container" style={{ padding: "4rem 0" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>New Project</h1>
            <ProjectForm />
        </div>
    );
}
