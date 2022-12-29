// Bài 1: Đoạn code này sẽ hiển thị gì?

let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log( fruits.length );
//Hiển thị độ dài của mảng là 4

//Bài 2:
//Hãy thử 5 phép toán trong mảng.
// Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
// Thêm “Rock-n-Roll” vào cuối.
// Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
// Tách giá trị đầu tiên của mảng và hiển thị nó.
// Thêm trước Rap và Reggae vào mảng.


// Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
let styles = ["Jazz", "Blues"]
// Thêm “Rock-n-Roll” vào cuối.
styles.push ('Rock-n-Roll')
// Thay thế giá trị ở giữa bằng “Classics”.
styles[1] = "Classics"
// Tách giá trị đầu tiên của mảng và hiển thị nó.
styles.shift()
//Thêm trước Rap và Reggae vào mảng.
styles.unshift('Rap', 'Reggae')
console.log(styles)

//Bài 3: Kết quả là gì? Tại sao?
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();
// Kết quả trả về là 
/* a,b,function(){
    alert ( this )
}

*/

// Bài 4:
// Viết hàm sumInput() rằng:
// Yêu cầu người dùng nhập các giá trị bằng cách sử dụng prompt và lưu trữ các giá trị trong mảng.
// Kết thúc yêu cầu khi người dùng nhập một giá trị không phải số, một chuỗi trống hoặc nhấn “Hủy”.
// Tính toán và trả về tổng của các mục mảng.

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  console.log('Tổng của các số đã nhập là: ', sumInput() );

// Bài 5:
// Đầu vào là một mảng số, ví dụ: arr = [1, -2, 3, 4, -9, 6].
// Nhiệm vụ là: tìm mảng con liền kề của arr với tổng các item lớn nhất.
// Viết hàm getMaxSubSum(arr) sẽ trả về tổng đó.
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0