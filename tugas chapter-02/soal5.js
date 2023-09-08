const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];


const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

const getInfoPenjualan = (dataPenjualan) =>{
  if(!Array.isArray(dataPenjualan)){
    return "Data yang dimasukkan harus berupa array"
  }

  let totalKeuntungan = 0
  let totalModal = 0
  let persentaseKeuntungan = 0
  
  let produkBukuTerlaris = {
    namaProduk : "",
    totalTerjual : 0,
  }

  let penulisTerlaris = {
    penulis : "",
    totalTerjual : 0,
  }

  dataPenjualanNovel.map((value)=>{
   
    totalKeuntungan += (value.hargaJual - value.hargaBeli) * value.totalTerjual
    totalModal  += value.hargaBeli * value.totalTerjual

    if(value.totalTerjual > produkBukuTerlaris.totalTerjual){
      produkBukuTerlaris.namaProduk = value.namaProduk
      produkBukuTerlaris.totalTerjual = value.totalTerjual
    }

    if(value.totalTerjual > penulisTerlaris.totalTerjual){
      penulisTerlaris.penulis = value.penulis
      penulisTerlaris.totalTerjual = value.totalTerjual
    }

    persentaseKeuntungan = (totalKeuntungan/totalModal) *100
    

    
  })
  return {
    totalKeuntungan: rupiah(totalKeuntungan),
    totalModal: rupiah(totalModal),
    produkBukuTerlaris,
    penulisTerlaris,
    persentaseKeuntungan: persentaseKeuntungan.toFixed(2) + "%"
  }
}

console.log(getInfoPenjualan(dataPenjualanNovel))