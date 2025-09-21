// src/index.ts
import { getTranscript, getStudentIDs, addStudent, addGrade, getAllTranscripts } from "./dataService";

async function main() {
    console.log("=== Running Transcript Manager ===");

    const newStudent = await addStudent("Alice");
    console.log("Added student:", newStudent);

    const ids = await getStudentIDs("Alice");
    console.log("Fetched IDs:", ids);

    const grade = await addGrade(ids[0], "Math", "A");
    console.log("Grade added:", grade);

    const transcript = await getTranscript(ids[0]);
    console.log("Transcript:", transcript);

    const all = await getAllTranscripts();
    console.log("All transcripts:", all);
}

main().catch((err) => console.error("Error in main:", err));
