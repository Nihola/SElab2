import { useState } from "react";
import * as ds from "./dataService";
import type { Transcript } from "./types";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [output, setOutput] = useState<any>("");

  async function handleAddStudent() {
    try {
      const res = await ds.addStudent(studentName);
      setOutput(res);
    } catch (e: any) {
      setOutput(e.message);
    }
  }

  async function handleGetStudentIDs() {
    try {
      const res = await ds.getStudentIDs(studentName);
      setOutput(JSON.stringify(res));
    } catch (e: any) {
      setOutput(e.message);
    }
  }

  async function handleGetTranscript() {
    try {
      const res: Transcript = await ds.getTranscript(Number(studentID));
      setOutput(JSON.stringify(res, null, 2));
    } catch (e: any) {
      setOutput(e.message);
    }
  }

  async function handleAddGrade() {
    try {
      const res = await ds.addGrade(Number(studentID), course, grade);
      setOutput(res);
    } catch (e: any) {
      setOutput(e.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-pink-200 to-amber-100 p-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl shadow-2xl p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            🎓 Transcript Manager
          </h1>
          <p className="mt-4 text-lg text-pink-100">Manage students & transcripts with elegance ✨</p>
        </header>

        {/* Add Student */}
        <section className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">➕ Add Student</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-300 shadow-inner"
              type="text"
              placeholder="Enter student name..."
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <button
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg transition"
              onClick={handleAddStudent}
            >
              Add
            </button>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg transition"
              onClick={handleGetStudentIDs}
            >
              Get IDs
            </button>
          </div>
        </section>

        {/* Add Grade & Transcript */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">📝 Add Grade / Get Transcript</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <input
              className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 shadow-inner"
              type="number"
              placeholder="Student ID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
            <input
              className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 shadow-inner"
              type="text"
              placeholder="Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <input
              className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-indigo-300 shadow-inner"
              type="text"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <div className="flex gap-3">
              <button
                className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-xl shadow-lg text-lg transition"
                onClick={handleAddGrade}
              >
                Add Grade
              </button>
              <button
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-xl shadow-lg text-lg transition"
                onClick={handleGetTranscript}
              >
                Get Transcript
              </button>
            </div>
          </div>
        </section>

        {/* Output / Log */}
        <section className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">📊 Output / Log</h2>
          <pre className="bg-gray-900 text-green-300 p-6 rounded-xl text-sm md:text-base max-h-72 overflow-y-auto shadow-inner border border-gray-700">
            {output || "⚡ No output yet."}
          </pre>
        </section>
      </div>
    </div>
  );
}

export default App;
