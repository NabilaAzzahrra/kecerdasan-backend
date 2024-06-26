'use strict';

/** @type {import('sequelize-cli')Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Questions', 
        [
            {
                id_type: 7,
                question: "Saya senang belajar tentang diri sendiri untuk mengetahui Who Am I?",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Saya bisa memainkan alat musik.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 4,
                question: "Saya paling mudah menyelesaikan masalah ketika melakukan sesuatu secara fisik, seperti memukul, melempar atau banting sesuatu.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Saya seringkali mendengar lagu atau musik dalam pikiran/benak saya.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Saya mengerti berbagai spesies tumbuhan dan hewan di dalam suatu lingkungan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Menurut saya, menganggarkan dan mengatur keuangan sendiri itu mudah.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 1,
                question: "Saya mudah membuat cerita.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Saya suka memikirkan bagaimana planet ini tercipta",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 4,
                question: "Koordinasi fisik saya selalu bagus.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Saya tahu bahwa paus bukan tergolong dalam keluarga ikan, namun kelompok mamalia yang hidup di lautan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },{
                id_type: 1,
                question: "Ketika bicara dengan orang, saya cenderung mendengarkan kata per kata yang mereka gunakan, bukan hanya pada apa yang mereka maksud.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 1,
                question: "Saya senang mengisi TTS dan bermain mencari kata atau permainan lain yang menggunakan kata.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Saya tidak suka hal-hal yang rancu (gaje), saya menyukai segala hal yang jelas.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Saya memiliki keahlian mendeteksi, memimpikan, dan merancang urusan yang besar",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Saya menyukai teka-teki logis seperti sudoku.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya senang bermeditasi/bertafakur untuk menjernihkan pikiran agar merasa lebih tenang, nyaman & produktif.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Musik sangat penting bagiku.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 1,
                question: "Saya jago berbohong.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Saya suka healing  yang bisa berinteraksi dengan lingkungan (tumbuhan dan hewan).",
                createdAt:new Date(),
                updatedAt:new Date()
              },{
                id_type: 4,
                question: "Saya senang berolahraga atau menari.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya sangat tertarik dengan psikometri (uji kepribadian) dan tes IQ.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Orang yang bertindak irasional (tidak logis) mengesalkan saya karena tiba-tiba ia marah/komplain.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Saya menyadari bahwa musik yang saya sukai seringkali memiliki basis yang sesuai dengan emosi saya.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Saya orang yang sangat ramah dan saya senang berkumpul dengan orang lain.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Saya belajar mengambil hikmah dari suatu peristiwa",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Saya senang bersikap sistematis dan teliti.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Saya anggap membaca  grafik dan tabel itu mudah dan dimengerti.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Saya antusias mengikuti komunitas yang memiliki visi menjaga dan merawat lingkungan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 4,
                question: "Saya jago melempar - dart, batu kerikil di atas air (permainan aclok bangkong, frisbee (seperti boomerang/lempar piring).",
                createdAt:new Date(),
                updatedAt:new Date()
              },{
                id_type: 1,
                question: "Saya mudah mengingat kutipan atau kalimat.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Saya selalu mengenali tempat-tempat yang pernah saya datangi, bahkan tempat yang sudah lama tidak saya datangi atau tempat yang saya datangi ketika masih kecil.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Saya menikmati berbagai jenis musik.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Saya antusias mengikuti praktikum di laboratorium, seperti membedah tikus, melihat sel pembentuk tanaman melalui mikroskop atau mencampurkan cairan tertentu.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Ketika sedang berkonsentrasi, saya cenderung mencorat-coret/menggambar.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Jika mau, saya dapat memanipulasi orang agar mereka mengikuti apa yang saya inginkan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya dapat meramal/memprediksikan  perasaan dan perilaku saya dalam berbagai situasi secara akurat.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Kalau saya tidak boleh bohong, guru pun tidak boleh bohong",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Menurut saya, aritmatika mental itu mudah. Aritmatika mental adalah proses melakukan perhitungan matematis di kepala tanpa penggunaan metode mental, seperti visualisasi, menghafal, dan pengenalan pola untuk memecahkan masalah matematika.",
                createdAt:new Date(),
                updatedAt:new Date()
              },{
                id_type: 9,
                question: "Saya suka menikmati pemandangan gunung.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Saya dapat mengidentifikasikan banyak bunyi tanpa perlu melihat benda yang menimbulkannya.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 1,
                question: "Waktu di sekolah, salah satu pelajaran kesukaan saya adalah pelajaran bahasa.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Saya suka memikirkan suatu masalah secara mendalam, dengan mempertimbangkan segala konsekuensinya.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 1,
                question: "Saya menikmati debat dan diskusi.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Saya ahli dalam menempatkan diri",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Saya geram ketika ada manusia yang menelantarkan hingga menyakiti kucing atau anjing.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 4,
                question: "Saya sangat menyukai olahraga adrenalin dan wahana yang menakutkan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya paling menyukai olahraga individual.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Saya perduli perasaan orang-orang di sekitar saya.",
                createdAt:new Date(),
                updatedAt:new Date()
              },{
                id_type: 5,
                question: "Rumah saya penuh foto dan lukisan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 4,
                question: "Saya senang dan jago membuat barang kerajinan – tangan saya ahli.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Saya senang memutar musik ketika mengerjakan kegiatan apapun.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Saya cenderung mengutamakan kepentingan, keyakinan atau agama",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Saya mudah menghapal nomor telepon.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya menetapkan tujuan dan rencana ke depan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Saya paham tentang keseimbangan ekosistem ataupun paham tentang rantai makanan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 4,
                question: "Saya adalah orang yang sangat suka menyentuh dan meraba.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Saya mudah mengetahui apakah seseorang menyukai saya atau tidak.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Saya dapat dengan mudah membayangkan bagaimana terlihatnya suatu objek dari perspektif / sudut pandang lain.",
                createdAt:new Date(),
                updatedAt:new Date()
              },{
                id_type: 4,
                question: "Saya tidak pernah menggunakan instruksi untuk mebel flat-pack yang perlu dirakit.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Saya mudah bicara dengan orang baru.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 4,
                question: "Untuk belajar hal baru, saya cukup mencobanya langsung.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Saya seringkali melihat citra/gambar yang nyata ketika menutup mata.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Saya tidak menggunakan jari kalau menghitung.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Saya selalu berupaya menempatkan diri  di setiap situasi apapun dan di lingkungan sekitar",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 1,
                question: "Saya seringkali bicara dengan diri sendiri – dengan suara keras ataupun hanya dalam hati saja.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Di sekolah, saya menyukai pelajaran musik.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Sejak kecil saya suka mengunjungi kebun binatang.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 1,
                question: "Ketika berada di luar negeri, sepertinya saya akan mudah belajar dasar-dasar bahasa negeri tersebut.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 4,
                question: "Menurut saya, permainan yang menggunakan bola itu mudah dan menyenangkan.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 2,
                question: "Pelajaran kesayangan saya di sekolah adalah matematika.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Saya orang yang sangat peka",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya selalu tahu perasaan saya sendiri.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya realistis mengenai kekuatan dan kelemahan diri sendiri.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya punya catatan harian/diary.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Saya sangat menyadari bahasa tubuh orang lain.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Pelajaran kesayangan saya di sekolah adalah kesenian.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Ketika emosi saya dapat menguasai diri sendiri",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 1,
                question: "Saya senang membaca.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Saya mudah membaca peta.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Saya gelisah jika melihat seseorang menangis dan tidak bisa membantunya.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Saya jago menyelesaikan perselisihan orang lain.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 9,
                question: "Saya paham bagaimana awan terbentuk dan mengapa hujan turun.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Saya selalu berkhayal menjadi musisi atau penyanyi.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 6,
                question: "Saya lebih menyukai olahraga kelompok, seperti sepak bola, basket, dan lainnya.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 3,
                question: "Menyanyi membuatku sangat bahagia.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Saya tidak pernah tersasar ketika berada di tempat baru sendirian.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 5,
                question: "Jika saya belajar melakukan sesuatu, saya ingin melihat gambar dan diagram cara melakukannya.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 7,
                question: "Saya senang menghabiskan waktu sendirian.",
                createdAt:new Date(),
                updatedAt:new Date()
              },
              {
                id_type: 8,
                question: "Saya menyelesaikan sesuatu dengan berkepala dingin",
                createdAt:new Date(),
                updatedAt:new Date()
              },{
                id_type: 6,
                question: "Teman-teman saya selalu mendatangi saya untuk dukungan emosional ataupun nasehat.",
                createdAt:new Date(),
                updatedAt:new Date()
              }
        ],        
        {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Questions', null, {});
    }
};
