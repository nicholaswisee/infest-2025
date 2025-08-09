"use client";

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Upload, FileText, CheckCircle, AlertCircle, Download, LogOut } from "lucide-react"; // Add LogOut icon
import { UploadButton, UploadDropzone } from "@/utils/uploadthing/uploadthing";
import { useUserStore } from "@/stores/userStore";
import { useInitializeUserStore } from "@/hooks/useInitializeUserStore";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false); // Add loading state
  const router = useRouter();

  // Initialize user store
  useInitializeUserStore();
  
  const { user, userProfile, isLoading, refreshUser, logout } = useUserStore();

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      router.push('/');
      await logout()
      refreshUser(); 
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setIsLoggingOut(false);
    }
  }

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (isLoading) {
    return (
      <div className="relative h-screen w-full isolate overflow-hidden flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative h-screen w-full isolate overflow-hidden flex items-center justify-center">
        <div className="text-white text-xl">Please log in to access the dashboard</div>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center text-center text-white p-4 pt-24">
      <div className="w-full max-w-4xl mx-auto mb-8 flex justify-center items-center" data-aos="fade-down">
        <h1 className="bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent text-center bg-clip-text font-bold text-5xl">
          Dashboard
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto mb-8" data-aos="fade-up">
        <div className="bg-[#240046]/80 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-b from-white via-[#C899FF] to-white text-transparent bg-clip-text">
              Welcome, {userProfile?.teamName || user.email}
            </h2>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center gap-2 px-3 py-1 bg-red-600/80 hover:bg-red-700/80 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogOut className="w-3 h-3" />
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div>
              <p className="text-white/60 text-sm">Email</p>
              <p className="text-white font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Team Name</p>
              <p className="text-white font-medium">{userProfile?.teamName || 'N/A'}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Competition Type</p>
              <p className="text-white font-medium">{userProfile?.competitionType || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-[#240046]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
          <h3 className="text-xl font-bold mb-6 text-left">Submit Your File</h3>
          
          <div className="mb-6">
            <UploadDropzone
              endpoint="submissionUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                setUploadSuccess(true);
                setUploadError(null);
                refreshUser();
                setTimeout(() => setUploadSuccess(false), 5000);
              }}
              onUploadError={(error: Error) => {
                console.error("Upload error:", error);
                setUploadError(error.message);
                setTimeout(() => setUploadError(null), 5000);
              }}
              config={{
                mode: "auto",
              }}
              appearance={{
                container: "border-2 border-dashed border-white/30 rounded-xl p-8 transition-colors hover:border-white/50 cursor-pointer bg-transparent",
                uploadIcon: "text-white/60 w-12 h-12",
                label: "text-white text-lg mb-2",
                allowedContent: "text-white/60 text-sm",
                button: "bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white font-medium transition-colors ut-ready:bg-purple-600 ut-uploading:bg-purple-700 ut-uploading:cursor-not-allowed",
              }}
              content={{
                label: "Drop your file here or click to browse",
                allowedContent: "PDF, DOC, DOCX, ZIP (Max 16MB)",
              }}
            />
          </div>

          {uploadSuccess && (
            <div className="flex items-center gap-2 mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-200">File uploaded successfully!</span>
            </div>
          )}

          {uploadError && (
            <div className="flex items-center gap-2 mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="text-red-200">{uploadError}</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
        <div className="bg-[#240046]/80 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl">
          <h3 className="text-xl font-bold mb-4 text-left">Submission Status</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-white/60" />
              <div>
                <p className="text-white font-medium">
                  {userProfile?.submissionLink ? 'File Submitted' : 'No File Submitted'}
                </p>
                <p className="text-white/60 text-sm">
                  {userProfile?.submissionLink ? 'Your submission has been received' : 'Please upload your file'}
                </p>
              </div>
            </div>
            {userProfile?.submissionLink && (
              <a
                href={userProfile.submissionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                View File
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;