var users = [];
//Thêm
function addUser(user) {
  users.push(user);
}

var cuong1 = {
  cccd: 1,
  name: "Lê Quốc Cường",
  age: 23,
  phone: 123456789,
  address: "Nghệ An",
};

var cuong2 = {
  cccd: 2,
  name: "Lê Quốc Cường1",
  age: 24,
  phone: 234567891,
  address: "Hà Nội",
};

var cuong3 = {
  cccd: 3,
  name: "Lê Quốc Cường2",
  age: 24,
  phone: 234567891,
  address: "Thành Phố Hồ Chí Minh",
};

var cuong4 = {
    cccd: 4,
    name: "Lê Quốc Cường3",
    age: 24,
    phone: 234567891,
    address: "Quảng Ngãi",
};

var cuong5 = {
    cccd: 5,
    name: "Lê Quốc Cường4",
    age: 24,
    phone: 234567891,
    address: "Quảng Bình",
  };


addUser(cuong1);
addUser(cuong2);
addUser(cuong3);
addUser(cuong4);
addUser(cuong5);

// Edit name
function editName(cccd, name) {
      var findUser = users.find(function (findUser) {
            return findUser.cccd === cccd;
          });//hàm tìm user thỏa mãn cccd
        
  findUser.name = name;
}


function editAge(cccd, age) {
    var findUser = users.find(function (findUser) {
          return findUser.cccd === cccd;
        });
      
findUser.age = age;
}


// Edit phone
function editPhone(cccd, phone) {
    var findUser = users.find(function (findUser) {
          return findUser.cccd === cccd;
        });
      
findUser.phone = phone;
}


// Edit address
function editAddress(cccd, address) {
    var findUser = users.find(function (findUser) {
          return findUser.cccd === cccd;
        });
      
findUser.address = address;
}

editName(1,"Cường");// Edit name của User có cccd là 1
editAge(2,20);// Edit age của User có cccd là 2
editPhone(3,45674501);// Edit phone của User có cccd là 3
editAddress(4,"Lào Cai");// Edit address của User có cccd là 4

console.log (users)
console.log (users.length)
//Xóa (filter: dùng để lọc phần tử thỏa mãn điều kiện)
function deleteUserByCccd(cccd) {
    var filterUser = users.filter(function (item) {
        return item.cccd !== cccd;// trả về các user có cccd khác 1 và sẽ bỏ user có cccd là 1
    });
  users = filterUser;// dùng để cập nhật lại Users nếu không có dòng này thì Users vẫn như cũ 
}

deleteUserByCccd(2);// xóa User có cccd là 2 
deleteUserByCccd(3);// xóa User có cccd là 3
// khi xóa  2 user có cccd là 2 và 3 thì users trả về là 3
// khi xóa hết user thì users trả về là rỗng []
console.log (users)
console.log(users.length);


// // Edit all (phone, age, name, address)
// function editUser(cccd, name, age, phone, address) {
//     var findUser = users.find(function (findUser) {
//         return findUser.cccd === cccd;
//     }); // hàm tìm User thỏa mãn điều kiện 
    
//     findUser.name = name;
//     findUser.age = age;
//     findUser.phone = phone;
//     findUser.address = address;
// }

// editUser(5, "Đặng Quang Huy",20,0945674501,"Hà Nội");
// // sửa User có cccd là 5 (tham số edit gồm (cccd, Name, age, phone, address))
// console.log(users);
// // Delete by phone

// function editName(cccd, name) {
    //   var findUser = users.find(function (findUser) {
        //     return findUser.cccd === cccd;
        //   });
        
//   findUser.name = name;
// }

// function editAge(cccd, age) {
//   var findUser = users.find(function (findUser) {
//     return findUser.cccd === cccd;
//   });

//   findUser.age = age;
// }


// var user = [{
    //     cccd: 123,
    //     name: 'Lê Quốc Cường',
    //     age: 23,
    //     phone: 123456789,
    //     address: 'Nghệ An'
    // },
    // {
        //     id: 1234,
        //     name: 'Lê Quốc Cường1',
        //     age: 24,
        //     phone: 234567891,
        //     address: 'Hà Nội'
        // },
        // {
            //     id: 12345,
            //     name: 'Lê Quốc Cường2',
            //     age: 24,
            //     phone: 234567891,
            //     address: 'Hà Nội'
            // },
            // {
                //     id: 123456,
                //     name: 'Lê Quốc Cường3',
                //     age: 24,
                //     phone: 345678912,
                //     address: 'Hải Phòng'
                // }];
                
                // user.forEach(function (user, index){
                    //     console.log(index, user);
                    // });
                    
                    // var isAddress = user.every(function (user, index){
                        //     return user.address === 'Nghệ An'
                        // });
                        //  console.log(isAddress);
                        
// var isAddress = user.some(function (user, index){
//     return user.address === 'Nghệ An'
// });
//  console.log(isAddress);

//  var isAddress = user.find(function (user, index){
//     return user.address === 'Hà Nội'
// });
//  console.log(isAddress);

//  var isAddress = user.filter(function (user, index){
//     return user.address === 'Hà Nội'
// });
//  console.log(isAddress);

// function oldUser(user){
//     return user;
// }

//  var newUser = user.map(oldUser);

//  console.log (newUser);
