// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

/**
 * Note 
 * Hasil akhir akan seperti ini jadinya
 [
  {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: [],
  isHavePet: true,
  education: [
      {
          name: "",
          city: "",
          graduate: 0
      },
       {
          name: "",
          city: "",
          graduate: 0
      },
    ]
  favoriteRestaurant: [],
 *  }
 * ]
 *
 */

const elementarySchoolHistoryFirstUser = {
    name: "SD",
    city: "Jakarta",
    graduate: 2016,
};
const juniorHighSchoolHistoryFirstUser = {
    name: "SMP 02",
    city: "Jakarta",
    graduate: 2019,
};
const seniorHighSchoolHistoryFirstUser = {
    name: "SMA 03",
    city: "Tanggerang",
};

const elementarySchoolHistorySecondUser = {
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010,
};
const juniorSchoolHistorySecondUser = {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013,
};

const seniorSchoolHistorySecondUser = {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016,
};

const universitySecondUser = {
    name: "Universitas Maju,",
    city: "Tangerang",
};

//warna
const yellow = "Yellow";
const pink = "Pink";
const white = "White";
const purple = "Purple";
const blue = "Blue";
const black = "Black";
const grey = "Grey";

//nama restaurant
const bento = "Bento";
const sushi = "Sushi";
const pancake = "Pancake";
const eggy = "Eggy";
const tempura = "Tempura";
const padang = "Padang";
const tteok = "Tteok";
const katsu = "Katsu";
const geprek = "Geprek";

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [],
    isHavePet: true, //boolean
    education: [], //array object [{}]
    favoriteRestaurant: [],
};
const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [],
    isHavePet: false,
    education: [], //array object [{}]
    favoriteRestaurant: [],
};

//push array object
firstUser.favoriteColor.push(yellow, pink, white, purple);
firstUser.favoriteRestaurant.push(
    bento,
    sushi,
    pancake,
    tempura,
    eggy,
    padang,
    tteok
);
secondUser.favoriteColor.push(blue, black, grey);
secondUser.favoriteRestaurant.push(
    tempura,
    bento,
    sushi,
    pancake,
    padang,
    katsu,
    geprek,
    eggy
);

firstUser.education.push(
    elementarySchoolHistoryFirstUser,
    juniorHighSchoolHistoryFirstUser,
    seniorHighSchoolHistoryFirstUser
)

secondUser.education.push(
    elementarySchoolHistorySecondUser,
    juniorSchoolHistorySecondUser,
    seniorSchoolHistorySecondUser,
    universitySecondUser
);

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};
