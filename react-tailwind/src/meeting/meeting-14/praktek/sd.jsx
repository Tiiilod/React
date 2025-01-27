import React from "react";
import { Card } from "@/components/ui/card";

const MindMap = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <Card className="p-6 bg-orange-100 shadow-lg rounded-2xl">
        <div className="relative flex flex-col items-center">
          <div className="text-orange-800 font-bold text-xl mb-4">Individu dan Masyarakat</div>

          {/* Langkah-Langkah Penelitian Sosial */}
          <div className="absolute -top-20 left-0 text-orange-700">
            <div className="font-bold">Langkah-Langkah Penelitian Sosial</div>
            <ul className="list-disc ml-6">
              <li>Menyusun rancangan penelitian</li>
              <li>Mengumpulkan data</li>
              <li>Mengomunikasikan laporan penelitian</li>
            </ul>
          </div>

          {/* Ciri-Ciri Sosiologi */}
          <div className="absolute -top-12 left-40 text-orange-700">
            <div className="font-bold">Ciri-Ciri Sosiologi</div>
            <ul className="list-disc ml-6">
              <li>Empiris</li>
              <li>Teoritis</li>
              <li>Non-etis</li>
              <li>Kumulatif</li>
            </ul>
          </div>

          {/* Jenis Penelitian Sosial */}
          <div className="absolute -top-12 right-0 text-orange-700">
            <div className="font-bold">Jenis Penelitian Sosial</div>
            <ul className="list-disc ml-6">
              <li>Kuantitatif</li>
              <li>Kualitatif</li>
            </ul>
          </div>

          {/* Fungsi Ilmu Sosiologi */}
          <div className="absolute top-8 left-0 text-orange-700">
            <div className="font-bold">Fungsi Ilmu Sosiologi</div>
            <ul className="list-disc ml-6">
              <li>Memberikan pemahaman</li>
              <li>Mencari solusi masalah sosial</li>
              <li>Memprediksi perubahan sosial</li>
            </ul>
          </div>

          {/* Objek Kajian Sosiologi */}
          <div className="absolute top-8 right-0 text-orange-700">
            <div className="font-bold">Objek Kajian Sosiologi</div>
            <ul className="list-disc ml-6">
              <li>Kelompok sosial</li>
              <li>Hubungan sosial</li>
              <li>Nilai dan norma</li>
            </ul>
          </div>

          {/* Gejala Sosial sebagai Kajian Sosiologi */}
          <div className="absolute bottom-24 left-0 text-orange-700">
            <div className="font-bold">Gejala Sosial sebagai Kajian Sosiologi</div>
            <ul className="list-disc ml-6">
              <li>Berkaitan dengan penyimpangan sosial</li>
              <li>Ketimpangan sosial</li>
              <li>Perubahan sosial</li>
            </ul>
          </div>

          {/* Lembaga Sosial */}
          <div className="absolute bottom-24 right-0 text-orange-700">
            <div className="font-bold">Lembaga Sosial</div>
            <ul className="list-disc ml-6">
              <li>Keluarga</li>
              <li>Agama</li>
              <li>Pendidikan</li>
              <li>Ekonomi</li>
              <li>Budaya</li>
            </ul>
          </div>

          {/* Tindakan Sosial */}
          <div className="absolute bottom-10 left-20 text-orange-700">
            <div className="font-bold">Tindakan Sosial</div>
            <ul className="list-disc ml-6">
              <li>Rasional instrumental</li>
              <li>Rasional nilai</li>
              <li>Tradisional</li>
              <li>Afektif</li>
            </ul>
          </div>

          {/* Hubungan Sosial */}
          <div className="absolute bottom-10 right-20 text-orange-700">
            <div className="font-bold">Hubungan Sosial</div>
            <ul className="list-disc ml-6">
              <li>Asosiatif (kerja sama, akomodasi)</li>
              <li>Disosiatif (persaingan, konflik)</li>
            </ul>
          </div>

          {/* Identitas Diri */}
          <div className="absolute bottom-0 text-orange-700">
            <div className="font-bold">Identitas Diri</div>
            <ul className="list-disc ml-6">
              <li>Identitas pribadi</li>
              <li>Identitas sosial</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MindMap;
