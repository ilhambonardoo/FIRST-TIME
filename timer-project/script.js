const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const inputHours = document.getElementById("inputHours");
const inputMinutes = document.getElementById("inputMinutes");
const inputSeconds = document.getElementById("inputSeconds");
const startButton = document.getElementById("startButton");

let countdownInterval;

function startTimer() {
  let hours = parseInt(inputHours.value) || 0;
  let minutes = parseInt(inputMinutes.value) || 0;
  let seconds = parseInt(inputSeconds.value) || 0;
  /*
   * Ini tuh buat menyimpan nilai input angka dari string diubah ke integer mengunakan parseInt kemudian .value ini harus wajib ada karena parseInt() butuh string atau angka, bukan elemen HTML jika dipaksa .valuenya dihapus maka hasilnya NaN.
   * Kemudian arti dari || itu adalah OR yang memberikan nilai default.
   */

  /* CONTOH 
  let x = "" || "default";   // x = "default"
  let y = 0 || 10;           // y = 10
  let z = NaN || 5;          // z = 5
 */

  let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds; // Menyimpan nilai total dalam detik dari input hours minutes dan seconds agar menjadikan waktu lebih mudah diolah dalam logika program

  if (totalTimeInSeconds <= 0) {
    alert("Angka anda tidak valid!");
    return;
  }

  inputHours.value = "";
  inputMinutes.value = "";
  inputSeconds.value = "";
  // Isi dari input hours, minute, dan secondsnya itu menampilkan string kosong

  countdownInterval = setInterval(() => {
    /*
    setInterval(callback, interval) ini digunakan untuk menjalankan code berulang kali setiap x milidetik.
    Contoh :
    setInterval(() => {
      console.log("Setiap 1 detik jalan!");
    }, 1000);
    
    Ada lagi yang namanya setTimeout(callback,interval) itu hanya dijalankan sekali dengan delay tertentu.
    Contoh :
    setTimeout(() => {
      console.log("Ini muncul 3 detik setelah dipanggil");
    }, 3000);
    */

    const days = Math.floor(totalTimeInSeconds / 86400);
    const hours = Math.floor((totalTimeInSeconds % 86400) / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = Math.floor(totalTimeInSeconds % 60);
    /*
     * 86400 detik itu 1 hari.
     * Mengubah total waktu yang sudah dikonversi jadi jumlah detik.
     * Misal totalTimeInSeconds / 86400: akan memberikan jumlah hari dalam bentuk desimal (misal: 2.5 hari), kemudian kita menggunakan Math.floor untuk membulatkan ke bawah misal 2.5 hari jadi -> 2 hari lalu misal ada 1.9 hari jadi -> 1 hari.
     */

    daysElement.innerHTML = days.toString().padStart(2, "0");
    hoursElement.innerHTML = hours.toString().padStart(2, "0");
    minutesElement.innerHTML = minutes.toString().padStart(2, "0");
    secondsElement.innerHTML = seconds.toString().padStart(2, "0");

    /**
     * Menampilkan angka waktu ke display HTML yang dikonversikan ke string menggunakan toString() dengan hasil perhitungan logic yang sudah dihitung sebelumnya.
     * Kemudian padStart(2, "0") ini menampilan 2 digit angka yang diawali dengan angka 0
     */

    totalTimeInSeconds--; //Ini berguna untuk menghitung mundur 1 detik setiap kali interval jalan

    /**
     * bedanya dengan setInterval itu functionnya berjalan setiap 1 detik (berhubugnan dengan totalTimeInSeconds)
     */

    // CLEAR INPUT PADA SAAT DISTART
    if (totalTimeInSeconds < 0) {
      clearInterval(countdownInterval); // Memberhentikan setInterval
      alert("time is up");
    }
  }, 1000);
}
startButton.addEventListener("click", () => {
  clearInterval(countdownInterval); //Jika tombol start di klik ini dapat menghentikan countdown yang sedang berjalan
  startTimer(); // Memulai ulang timer
});
