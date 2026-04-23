document.getElementById("colorInput").addEventListener("input", function (event) {
  let selectedColor = event.target.value;

  document.getElementById("color-code").innerHTML = selectedColor; //Ini akan merubah tampilan html sesuai dengan nilai yang sudah disimpan di selectedColor

  document.getElementById("colorDisplay").style.backgroundColor = selectedColor; // Ini juga sama background display akan berubah warna sesauai dengan nilai yang sudah disimpan di selectedColor.

  console.log(event);
});

/*
 * Ini mengambil element HTML dari Id color input.
 * Lalu ada addEventlistener yang nantinya akan memberikan parameter seperti addEvenetlistener("", funciton callback).
 * Kemudian, disitu ada parameter string "input" yang artinya fungsi di dalamnya akan dijalankan setiap kali pengguna mengubah nilai Input.
 * Event adalah objek sejenis data kompleks yang ada di javscript langsung kepada fungsi event listener
 * Dicallback function itu ada (event) -> ini berguna untuk informasi tentang nilai yang dipilih
 *
 * Contoh dalam kasus ini let selectedColor = event.target.value
 * event.target = elemen HTML yang sedang berubah (yaitu input type = "color")
 * .value = nilai yang akan dipilih contoh f#000202
 *
 */
