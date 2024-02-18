/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');

/**
*membuat variabel inputEmailElement unutk tampilan input email
*@constant (HTMLElement)
*/
const inputEmailElement = document.querySelector('#inputEmail');

// membuat variabel inputPasswordElement unttuk tampilan password
// @constan (HTMLElement)
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';


// membuat varabel expectedPassword unutk menyimpan informasi password
const expectedPassword = 'superpassword';

// menambahkan aksi klik pada Button
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  // membuat password unutk menyimapan niali password yang digunakan
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  // cek apakah sama kondisi
  if (email == expectedEmail && password == expectedPassword) {
    // maka ke halaman home
    goToHome();
  } else {
    // jika tidak muncul pop up
    showPopUp();
  }
});
