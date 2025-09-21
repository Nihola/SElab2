// src/dataService.ts
import { remoteGet, remotePost } from "./remoteService";
import type { Transcript } from "./types";

export async function getTranscript(id: number): Promise<Transcript> {
    return remoteGet(`/transcripts/${id}`);
}

export async function getStudentIDs(name: string): Promise<number[]> {
    return remoteGet(`/students?name=${name}`);
}

export async function addStudent(name: string): Promise<string> {
    return remotePost("/students", { name });
}

export async function addGrade(studentID: number, course: string, grade: string): Promise<string> {
    return remotePost("/grades", { studentID, course, grade });
}

export async function getAllTranscripts(): Promise<Transcript[]> {
    return remoteGet("/transcripts");
}
