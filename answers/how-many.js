/**
 * Anda sedang berbelanja sebuah barang, tapi penjual hanya memperbolehkan
 * Anda untuk membayar dengan jumlah lembar uang yang sesuai dengan permintaannya.
 * Buatlah sebuah function untuk menentukan pecahan mata uang yang dibutuhkan untuk
 * membayar barang tersebut. (Menggunakanpecahan uang kertas Rupiah)
 *
 * Input
 * harga_barang, jumlah_lembar
 *
 * 0 < harga barang < 100000
 * 0 < jumlah_lembar < 10
 *
 * Input Example 1
 * 17000, 1
 *
 * Expected Output
 * [20000]
 *
 * Explanation
 * Untuk memenuhi transaksi sejumlah 17000 dengan 1 lembar uang, maka
 * pecahan mata uang terdekat yang dapat digunakan adalah pecahan 20000.
 *
 * Input Example 2
 * 23000, 4
 *
 * Expected Output
 * [20000, 1000, 1000, 1000]
 *
 * Explanation
 * Untuk memenuhi transaksi sejumlah 23000 dengan 4 lembar uang, maka
 * pecahan mata uang terdekat yang dapat digunakan adalah pecahan 20000,1000, 1000, 1000.
 */

// Have No Idea for this
function findCurrencyDenom(hargaBarang, jumlahLembar) {
  const pecahanRupiah = [1000, 2000, 5000, 10000, 20000, 50000, 100000]
  const hasil = []
  let pecahan = 0
  do {
    for (let i = 0; i < pecahanRupiah.length; i++) {
      pecahan = pecahanRupiah[i]
      const hasilbagi = Math.round(hargaBarang / pecahan)
      if (
        hasilbagi === 1 ||
        (hasilbagi === jumlahLembar && hargaBarang >= pecahan)
      ) {
        hasil.push(pecahan)
        hargaBarang -= pecahan
        break
      }
    }

    jumlahLembar--
  } while (jumlahLembar >= 0)

  console.log(hasil)
}

findCurrencyDenom(17000, 1)
findCurrencyDenom(23000, 4)
findCurrencyDenom(35000, 3)

