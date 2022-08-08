'use strict';

const btnDice = document.querySelector('.btnRandom');
const displayQuotes = document.querySelector('#word');
// quotes
const quotes = [
  '"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti." \n (Kahlil Gibran, Pujangga)',
  '"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu."\n (Dale Carnegie)',
  '"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya. "\n (Lance Armstrong)',
  '"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat "disisipkan" di antara pujian."\n (May Kay Ash)',
  '"Tiada awan di langit yang tetap selamanya. Tiada mungkin akan terus-menerus terang cuaca. Sehabis malam gelap gulita lahir pagi membawa keindahan. Kehidupan manusia serupa alam."\n (RA Kartini)',
  '"Percayalah, jika dia memang cinta sejati kau, mau semenyakitkan apa pun, mau seberapa sulit liku yang harus dilalui, dia tetap akan bersama kau kelak, suatu saat nanti."\n (Tere Liye)',
  '"Cinta itu bukan hanya perasaan senang ketika bersamanya. Cinta juga adalah komitmen untuk tetap bersamanya, ketika perasaan senang itu hilang." \n(Merry Riana)',
  '"Setiap orang pasti akan mengalami patah hati yang mengubah cara pandangnya terhadap cinta seumur hidupnya." \n(Raditya Dika)',
  '"Cara yang paling mudah untuk tahu apakah kita cocok dengan orang tersebut atau tidak adalah ketika kita merasa lupa waktu," \n(Raditya Dika)',
];

function createName() {
  const greetingsName = prompt('Insert Your Name !');
  document.querySelector('#nama').textContent = `Hello ${greetingsName} !`;
}
// createName();

btnDice.addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  displayQuotes.textContent = quotes[randomNumber];

  console.log(randomNumber);
});
