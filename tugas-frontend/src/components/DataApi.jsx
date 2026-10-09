import { useState, useEffect } from 'react';
export default function DataApi() { 
    const [daftarData, setDaftarData] = useState([]);
    useEffect(() => {
  // Ganti URL di bawah dengan endpoint lengkap dari instruktur Anda
  fetch('https://api.ptrkr.moe/api/users')
    .then(response => response.json()) // Mengubah data mentah menjadi JSON
    .then(data => setDaftarData(data)) // Memasukkan data ke dalam 'wadah'
    .catch(error => console.log("Gagal menarik data:", error));
}, []); // Array kosong ini wajib agar penarikan data tidak berulang tanpa henti
  return (
  <section style={{ padding: '50px' }}>
    <h2>Data dari API</h2>
    
    {/* Menggunakan tag table dengan sedikit gaya dasar agar rapi */}
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
      
      {/* thead adalah bagian kepala tabel (judul kolom) */}
      <thead>
        <tr>
          <th style={{ padding: '10px' }}>No</th>
          <th style={{ padding: '10px' }}>Nama</th>
          <th style={{ padding: '10px' }}>Email</th>
          <th style={{ padding: '10px' }}>Aksi</th>
        </tr>
      </thead>
      
      {/* tbody adalah bagian isi tabel yang datanya berulang */}
      <tbody>
        {daftarData.map((item, index) => (
          <tr key={index}>
            <td style={{ padding: '10px' }}>{index + 1}</td>
            
            {/* CATATAN PENTING:
                Cek console.log kamu. Jika API menggunakan bahasa Inggris, 
                mungkin propertinya adalah item.name dan item.email 
                (bukan item.nama) 
            */}
            <td style={{ padding: '10px' }}>{item.nama || item.name}</td>
            <td style={{ padding: '10px' }}>{item.email}</td>
            
            {/* Kolom ini nantinya bisa kamu isi tombol Edit/Hapus untuk tugas CRUD */}
            <td style={{ padding: '10px' }}>
              <button>Edit</button>
              <button>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
      
    </table>
  </section>
);
 }