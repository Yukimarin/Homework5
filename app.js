// Bài 1: 
// let mobile = [
//     {
//         name: "Sony Xperia XZ Premium",
//         Brand: "Sony",
//         Price: "4428",
//         Color: "White",
//         Category: "Charge",
//     },
//     {
//         name: "OPPO F3 Plus",
//         Brand: "OPPO",
//         Price: "5487",
//         Color: "Black",
//         Category: "Phone",
//     },
//     {
//         name: "IPhone 13 Pro Max",
//         Brand: "Apple",
//         Price: "21490",
//         Color: "Gray",
//         Category: "Phone",
//     },
//     {
//         name: "Samsung Galaxy S8",
//         Brand: "Samsung",
//         Price: "8490",
//         Color: "Blue",
//         Category: "Phone",
//     },
// ]
// 1.1 In name và price của tất cả các sản phẩm
// for (let i = 0; i < mobile.length; i++) {
//     console.log(`#${i} Name: ${mobile[i].name}`);
//     console.log(` Price: ${mobile[i].Price}`);
//     console.log("-------");
// }

// 1.2 Viết script in/đăng xuất sản phẩm với số của chúng.
// let userInput = Number(prompt('Enter product position: '));
// console.log(`Name: ${mobile[userInput].name}`);
// console.log(`Brand: ${mobile[userInput].Brand}`);
// console.log(`Price: ${mobile[userInput].Price}`);
// console.log(`Color: ${mobile[userInput].Color}`);
// console.log(`Category: ${mobile[userInput].Category}`);

// 1.3.
// let a = prompt('Nhập category bạn muốn');
// for (let i = 0; i < mobile.length; i++) {
//     if (a == mobile[i].Category){
//         console.log("-------");
//         console.log(`Name: ${mobile[i].name}`);
//         console.log(`Brand: ${mobile[i].Brand}`);
//         console.log(`Price: ${mobile[i].Price}`);
//         console.log(`Color: ${mobile[i].Color}`);
//         console.log(`Category: ${mobile[i].Category}`);
//     }
    
// }

// // 1.4 Thêm nhà cung cấp vào từng sản phẩm
// let Providers= ["Phukienso","Tgdd","Tgdd","Tgdd"]
// for (let i =0; i <Providers.length;i ++){
//     mobile[i].Provider = Providers[i];
// }console.log(mobile);

// 1.5 Tìm kiếm sản phẩm dựa trên nhà cung cấp mong muốn do người dùng nhập
// let b= prompt('Chọn nhà cung cấp:');
// for (let i = 0; i < mobile.length; i++){
//     if (b == mobile[i].Providers){
//         console.log("------");
//         console.log(`Name: ${mobile[i].name}`);
//         console.log(`Brand: ${mobile[i].Brand}`);
//         console.log(`Price: ${mobile[i].Price}`);
//         console.log(`Color: ${mobile[i].Color}`);
//         console.log(`Category: ${mobile[i].Category}`);
//         console.log(`Provider: ${mobile[i].Providers}`);
//     }
// }

// Bài 2: 
//2 + 2.6
// let learning = [
//     {
//       id: 1,
//       name: "HTML",
//       complete: "false",
//       check: "[ ]",
//     },
//     {
//       id: 2,
//       name: "CSS",
//       complete: "false",
//       check: "[ ]",
//     },
//     {
//       id: 3,
//       name: "Basic of javascript",
//       complete: "false",
//       check: "[ ]",
//     },
//     {
//       id: 4,
//       name: "Node package Manager (npm)",
//       complete: "false",
//       check: "[ ]",
//     },
//     {
//       id: 5,
//       name: "Git",
//       complete: "false",
//       check: "[ ]",
//     },
//   ];
  
//   //2.2 add new
//   let state = true;
//   while (state) {
//     let userInput = prompt("Enter your command(New, Delete, Update, Complete)").toUpperCase();
//     if (userInput == "C") {
//       let taskInput = prompt("Enter new task:");
//       learning.push({
//         id: learning.length + 1,
//         name: taskInput,
//         complete: false,
//         check: "[ ]",
//       });
//       console.clear();
  
//       for (let key in learning) {
//         console.log(
//           learning[key].id +
//             ". " +
//             learning[key].name +
//             "\n" +
//             "Complete: " +
//             learning[key].complete
//         );
//       }
//       console.log("----------------------------");
  
//       for (let key in learning) {
//         console.log(
//           learning[key].id + ". " + learning[key].check + " " + learning[key].name
//         );
//       } //2.3 update
//     }
//     if (userInput == "U") {
//       let position = Number(prompt("Enter position "));
//       let title = prompt("Enter new title");
//       for (let key in learning) {
//         if (position == learning[key].id) {
//           learning[key].name = title;
//           console.log(learning[key].name);
//         }
//       }
//       console.clear();
//       for (let key in learning) {
//         console.log(
//           learning[key].id +
//             ". " +
//             learning[key].name +
//             "\n" +
//             "Complete: " +
//             learning[key].complete
//         );
//       }
//       console.log("-------------------------------");
//       for (let key in learning) {
//         console.log(
//           learning[key].id + ". " + learning[key].check + " " + learning[key].name
//         );
//       }
//     }
//     //2.4 complete
//     if (userInput== "X") {
//       let position = Number(prompt("Nhập vị trí để hoàn thành"));
//       for (let key in learning) {
//         if (position == learning[key].id) {
//           learning[key].complete = true;
//           learning[key].check = "[x]";
//         }
//       }
//       console.clear();
//       for (let key in learning) {
//         console.log(
//           learning[key].id +
//             ". " +
//             learning[key].name +
//             "\n" +
//             "Complete: " +
//             learning[key].complete
//         );
//       }
//       console.log("----------------------------------------------------------");
//       for (let key in learning) {
//         console.log(
//           learning[key].id + ". " + learning[key].check + " " + learning[key].name
//         );
//       }
//     }
//     if (userInput == "D") {
//       let position = Number(prompt("Nhập vị trí muốn xóa"));
//       for (let key in learning) {
//         if (position == learning[key].id) {
//           delete learning[key];
//         }
//       }
//       console.clear();
//       for (let key in learning) {
//         console.log(
//   learning[key].id +
//             ". " +
//             learning[key].name +
//             "\n" +
//             "Complete: " +
//             learning[key].complete
//         );
//       }
//       console.log("----------------------------------------------------------");
//       for (let key in learning) {
//         console.log(
//           learning[key].id + ". " + learning[key].check + " " + learning[key].name
//         );
//       }
//     } else if (userInput == "E") {
//       state = false;
//     }
//   }