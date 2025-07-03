"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { UploadCloud, FileText, X, ArrowRight, ArrowLeft } from "lucide-react";

// Tipe untuk data formulir
interface FormData {
  // Step 1
  namaKelompok: string;
  metodePembayaran: "BCA" | "Gopay" | "Mandiri" | "";
  buktiPembayaran: File | null;
  // Step 2
  namaKetua: string;
  emailKetua: string;
  hpKetua: string;
  univKetua: string;
  ktmKetua: File | null;
  twibbonKetua: File | null;
  followKetua: File | null;
  // Step 3
  namaAnggota1: string;
  hpAnggota1: string;
  univAnggota1: string;
  ktmAnggota1: File | null;
  twibbonAnggota1: File | null;
  followAnggota1: File | null;
  // Step 4 (Optional)
  namaAnggota2: string;
  hpAnggota2: string;
  univAnggota2: string;
  ktmAnggota2: File | null;
  twibbonAnggota2: File | null;
  followAnggota2: File | null;
}

// Komponen File Input yang dapat digunakan kembali
const FileInput = ({
  label,
  file,
  onFileChange,
  required = true,
}: {
  label: string;
  file: File | null;
  onFileChange: (file: File | null) => void;
  required?: boolean;
}) => {
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        // 5MB limit
        alert("Ukuran file tidak boleh melebihi 5MB.");
        return;
      }
      onFileChange(selectedFile);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-white/90 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {!file ? (
        <label className="relative cursor-pointer w-full flex justify-center items-center h-24 rounded-lg border border-dashed border-white/30 hover:border-purple-400 transition-colors">
          <div className="text-center">
            <UploadCloud className="mx-auto h-8 w-8 text-white/50" />
            <span className="mt-2 text-sm text-white/70">
              Pilih file (Maks 5MB)
            </span>
          </div>
          <input
            type="file"
            className="sr-only"
            onChange={handleFileSelect}
            accept=".pdf,.png,.jpg,.jpeg"
            required={required}
          />
        </label>
      ) : (
        <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
          <div className="flex items-center gap-3 overflow-hidden">
            <FileText className="h-6 w-6 text-purple-400 flex-shrink-0" />
            <span className="text-sm text-white/80 truncate">{file.name}</span>
          </div>
          <button
            type="button"
            onClick={() => onFileChange(null)}
            className="text-red-400 hover:text-red-300 flex-shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

// Komponen Form Utama
const CompetitionForm = ({
  competitionType,
}: {
  competitionType: "BCC" | "ERC";
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    namaKelompok: "",
    metodePembayaran: "",
    buktiPembayaran: null,
    namaKetua: "",
    emailKetua: "",
    hpKetua: "",
    univKetua: "",
    ktmKetua: null,
    twibbonKetua: null,
    followKetua: null,
    namaAnggota1: "",
    hpAnggota1: "",
    univAnggota1: "",
    ktmAnggota1: null,
    twibbonAnggota1: null,
    followAnggota1: null,
    namaAnggota2: "",
    hpAnggota2: "",
    univAnggota2: "",
    ktmAnggota2: null,
    twibbonAnggota2: null,
    followAnggota2: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [hasAnggota2, setHasAnggota2] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (id: keyof FormData, file: File | null) => {
    setFormData((prev) => ({ ...prev, [id]: file }));
  };

  const validateStep = () => {
    if (step === 1) {
      return (
        formData.namaKelompok &&
        formData.metodePembayaran &&
        formData.buktiPembayaran
      );
    }
    if (step === 2) {
      return (
        formData.namaKetua &&
        formData.emailKetua &&
        formData.hpKetua &&
        formData.univKetua &&
        formData.ktmKetua &&
        formData.twibbonKetua &&
        formData.followKetua
      );
    }
    if (step === 3) {
      return (
        formData.namaAnggota1 &&
        formData.hpAnggota1 &&
        formData.univAnggota1 &&
        formData.ktmAnggota1 &&
        formData.twibbonAnggota1 &&
        formData.followAnggota1
      );
    }
    if (step === 4 && hasAnggota2) {
      return (
        formData.namaAnggota2 &&
        formData.hpAnggota2 &&
        formData.univAnggota2 &&
        formData.ktmAnggota2 &&
        formData.twibbonAnggota2 &&
        formData.followAnggota2
      );
    }
    return true; // Step 4 is optional if not toggled
  };

  const nextStep = () => {
    if (validateStep()) {
      if (step === 3 && !hasAnggota2) {
        // Skip step 4 if no Anggota 2
        handleSubmit(new Event("submit") as any);
      } else {
        setStep((prev) => prev + 1);
      }
    } else {
      alert("Harap isi semua kolom yang wajib diisi (*).");
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep()) {
      alert("Harap isi semua kolom yang wajib diisi (*).");
      return;
    }
    setIsSubmitting(true);
    setStatusMessage("Mengirim pendaftaran, mohon tunggu...");

    const dataToSend = new FormData();
    dataToSend.append("competitionType", competitionType);

    // Append all form data and files
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        dataToSend.append(key, value);
      } else if (value !== null) {
        dataToSend.append(key, value);
      }
    });

    if (!hasAnggota2) {
      // Remove optional fields if not filled
      [
        "namaAnggota2",
        "hpAnggota2",
        "univAnggota2",
        "ktmAnggota2",
        "twibbonAnggota2",
        "followAnggota2",
      ].forEach((key) => {
        dataToSend.delete(key);
      });
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: dataToSend,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Terjadi kesalahan.");
      setStatusMessage("Pendaftaran berhasil! Terima kasih.");
      // Optionally reset form or redirect
    } catch (error: any) {
      setStatusMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1a0033] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-[#240046]/80 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Pendaftaran {competitionType}
        </h1>
        <p className="text-center text-white/70 mb-8">
          Langkah {step} dari {hasAnggota2 ? 4 : 3}
        </p>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-white">
                Informasi Kelompok
              </h2>
              <div>
                <label
                  htmlFor="namaKelompok"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Nama Kelompok <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="namaKelompok"
                  value={formData.namaKelompok}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="metodePembayaran"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Metode Pembayaran <span className="text-red-400">*</span>
                </label>
                <select
                  id="metodePembayaran"
                  value={formData.metodePembayaran}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                >
                  <option value="" disabled>
                    Pilih metode
                  </option>
                  <option value="BCA">BCA</option>
                  <option value="Gopay">Gopay</option>
                  <option value="Mandiri">Mandiri</option>
                </select>
              </div>
              <FileInput
                label="Bukti Pembayaran"
                file={formData.buktiPembayaran}
                onFileChange={(file) =>
                  handleFileChange("buktiPembayaran", file)
                }
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-white">
                Informasi Ketua Kelompok
              </h2>
              <div>
                <label
                  htmlFor="namaKetua"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Nama Ketua <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="namaKetua"
                  value={formData.namaKetua}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="emailKetua"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="emailKetua"
                  value={formData.emailKetua}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="hpKetua"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Nomor HP <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="hpKetua"
                  value={formData.hpKetua}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="univKetua"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Universitas Asal <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="univKetua"
                  value={formData.univKetua}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <FileInput
                label="Foto KTM"
                file={formData.ktmKetua}
                onFileChange={(file) => handleFileChange("ktmKetua", file)}
              />
              <FileInput
                label="Bukti Postingan Twibbon"
                file={formData.twibbonKetua}
                onFileChange={(file) => handleFileChange("twibbonKetua", file)}
              />
              <FileInput
                label="Bukti Follow Instagram"
                file={formData.followKetua}
                onFileChange={(file) => handleFileChange("followKetua", file)}
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-white">
                Informasi Anggota 1
              </h2>
              {/* Fields for Anggota 1 */}
              <div>
                <label
                  htmlFor="namaAnggota1"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Nama Anggota 1 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="namaAnggota1"
                  value={formData.namaAnggota1}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="hpAnggota1"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Nomor HP <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="hpAnggota1"
                  value={formData.hpAnggota1}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="univAnggota1"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Universitas Asal <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="univAnggota1"
                  value={formData.univAnggota1}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <FileInput
                label="Foto KTM"
                file={formData.ktmAnggota1}
                onFileChange={(file) => handleFileChange("ktmAnggota1", file)}
              />
              <FileInput
                label="Bukti Postingan Twibbon"
                file={formData.twibbonAnggota1}
                onFileChange={(file) =>
                  handleFileChange("twibbonAnggota1", file)
                }
              />
              <FileInput
                label="Bukti Follow Instagram"
                file={formData.followAnggota1}
                onFileChange={(file) =>
                  handleFileChange("followAnggota1", file)
                }
              />

              <div className="relative flex items-start pt-4">
                <div className="flex h-6 items-center">
                  <input
                    id="hasAnggota2"
                    type="checkbox"
                    checked={hasAnggota2}
                    onChange={(e) => setHasAnggota2(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label
                    htmlFor="hasAnggota2"
                    className="font-medium text-white/90"
                  >
                    Saya ingin menambahkan Anggota 2 (Opsional)
                  </label>
                </div>
              </div>
            </div>
          )}

          {step === 4 && hasAnggota2 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-white">
                Informasi Anggota 2 (Opsional)
              </h2>
              {/* Fields for Anggota 2 */}
              <div>
                <label
                  htmlFor="namaAnggota2"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Nama Anggota 2
                </label>
                <input
                  type="text"
                  id="namaAnggota2"
                  value={formData.namaAnggota2}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="hpAnggota2"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Nomor HP
                </label>
                <input
                  type="tel"
                  id="hpAnggota2"
                  value={formData.hpAnggota2}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="univAnggota2"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Universitas Asal
                </label>
                <input
                  type="text"
                  id="univAnggota2"
                  value={formData.univAnggota2}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <FileInput
                label="Foto KTM"
                file={formData.ktmAnggota2}
                onFileChange={(file) => handleFileChange("ktmAnggota2", file)}
                required={false}
              />
              <FileInput
                label="Bukti Postingan Twibbon"
                file={formData.twibbonAnggota2}
                onFileChange={(file) =>
                  handleFileChange("twibbonAnggota2", file)
                }
                required={false}
              />
              <FileInput
                label="Bukti Follow Instagram"
                file={formData.followAnggota2}
                onFileChange={(file) =>
                  handleFileChange("followAnggota2", file)
                }
                required={false}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
              >
                <ArrowLeft size={16} />
                Kembali
              </button>
            )}
            <div className="flex-grow"></div>
            {step < (hasAnggota2 ? 4 : 3) && (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
              >
                Selanjutnya
                <ArrowRight size={16} />
              </button>
            )}
            {(step === 3 && !hasAnggota2) || (step === 4 && hasAnggota2) ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:bg-green-400"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
              </button>
            ) : null}
          </div>
          {statusMessage && (
            <p className="text-center text-sm text-white/80 mt-4">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CompetitionForm;
