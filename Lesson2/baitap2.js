/**Bai1 Viết một function Javascript in ra các số từ 1 đến 15 **trên 1 dòng** thỏa mãn điều kiện sau:
- Nếu số đó chia hết cho 3 ⇒ in ra "Fizz"
- Nếu số đó chia hết cho 5 ⇒ in ra "Buzz"
- Nếu số đó chia hết cho 3 và 5⇒ in ra "FizzBuzz"

Output: là một string thõa yêu cầu đề bài như trên. */

// function fizzBuzz() {
//   let result = "";
//   for (let i = 1; i <= 15; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result += "FizzBuzz";
//     } else if (i % 3 === 0) {
//       result += "Fizz";
//     } else if (i % 5 === 0) {
//       result += "Buzz";
//     }
//   }
//   return result;
// }
// console.log("FizzBuzzFizzFizzBuzzFizzFizzBuzz");
// console.log(fizzBuzz());

// ___________________________________

/**### Bài 2 Count Vowels
Viết một Javascript function, đếm số lượng các vowels trong một chuỗi
Biết rẳng **`vowels = { 'e' , 'u', 'o' ,'a' ,'i'}`** 
Mỗi `test case` đúng: `5 points` 
**Input**: Một string 
**Output**: Số lượng vowels (có xử lý ngoại lệ)*/

// function countVowels(str = "") {
//   if (typeof str !== "string") {
//     return "Dữ liệu đầu vào không hợp lệ!!!";
//   }
//   if (str.length === 0) {
//     return 0;
//   }
//   let count = 0;
//   const vowels = ["e", "u", "o", "a", "i"];
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (vowels.includes(char.toLocaleLowerCase())) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countVowels("anhyeuem")); //→ 4
// console.log(countVowels("Viet Nam vo dich. Malaysia tuoi gi :))")); //→ 13
// console.log(countVowels("")); //→ 0
// console.log(countVowels("Javascript is a beautiful programming language")); //→ 17
// console.log(countVowels(123)); //→ "Dữ liệu đầu vào không hợp lệ!!!"

// _______________________________________________

/** ### Bài 3:
Viết chương trình xóa các element trùng trong mảng
**Input**: mảng 1 chiều
**Output**: mảng đã được remove các phần tử trùng*/

// function removeDuplicateFromArray(arr = []) {
//   if (!Array.isArray(arr)) {
//     return "Du lieu dau vao khong hop le";
//   }
//   const newArray = [];
//   for (let item of arr) {
//     const isExist = newArray.includes(item);
//     if (!isExist) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

// console.log(removeDuplicateFromArray([1, 1, -1, 3, 5, 10]));
// console.log(removeDuplicateFromArray([true, 3, "hello", false, "hello", true]));
// console.log(removeDuplicateFromArray(["a", "b", "c", "d", "d", "c", "a"]));
// console.log(removeDuplicateFromArray("Hello"));

// ____________________________________________________

/** ### Bài 4: Kiểm tra 1 chuỗi có phải là chuỗi Palindrome hay không
Palindrome là một từ hoặc một cụm từ mà khi ta đọc xuôi hoặc đọc ngược thì nó cũng như vậy, ví dụ từ moom, racecar
Nếu:
- Là chuỗi Palindrome ⇒ Return true
- Không là chuỗi Palindrome ⇒ Return false*/

function isPalindrome(strA = "") {
  let result;
  let reversed = strA.split("").reverse().join("");
  if (strA == reversed) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
}
isPalindrome("moom");
isPalindrome("amanaplanacanalpanama");
isPalindrome("racecare");

// _____________________________________________

/**Bài5
 * Cau a: Viết hàm tính tổng lương công ty phải trả trong 1 tháng
 *  Goi y: Luong nhan vien = workingTime * salary
 */
const employeesInfo = [
  { name: "David", workingTime: 98, salary: 10 },
  { name: "Luiz", workingTime: 78, salary: 20 },
  { name: "Silva", workingTime: 165, salary: 25 },
  { name: "Santos", workingTime: 215, salary: 30 },
  { name: "Alex", workingTime: 143, salary: 28 },
];
// function getTotalSalaryOfCompany(employees) {
//   let result = 0;
//   for (let i = 0; i < employees.length; i++) {
//     result += employees[i].workingTime * employees[i].salary;
//   }
//   return result;
// }
// console.log("Tổng lương công ty phải trả trong 1 tháng: ");
// console.log(getTotalSalaryOfCompany(employeesInfo));

/**Cau b: Viet ham tinh luong cua 1 nhan vien bat ki trong danh sach employeesInfo */

// function getTotalSalaryOfEmployee(name1) {
//   let result1 = 0;
//   let bonus = 0;
//   let employeeExisted = false;
//   for (let i = 0; i < employeesInfo.length; i++) {
//     if (employeesInfo[i].name == name1) {
//       employeeExisted = true;
//       if (employeesInfo[i].workingTime >= 150) {
//         bonus = 200;
//       } else if (
//         employeesInfo[i].workingTime >= 100 &&
//         employeesInfo[i].workingTime < 150
//       ) {
//         bonus = 150;
//       } else if (
//         employeesInfo[i].workingTime >= 50 &&
//         employeesInfo[i].workingTime < 100
//       ) {
//         bonus = 100;
//       } else if (employeesInfo[i].workingTime < 50) {
//         bonus = 50;
//       }
//       result1 = employeesInfo[i].workingTime * employeesInfo[i].salary + bonus;
//       console.log(`${employeesInfo[i].name}'s salary: $${result1}`);
//       break;
//     }
//   }
//   if (!employeeExisted) {
//     console.log("Nhân viên không tồn tại");
//   }
// }
// getTotalSalaryOfEmployee("Lenin");
// getTotalSalaryOfEmployee("Alex");
// getTotalSalaryOfEmployee("Luiz");

// _____________________________________________________________

/**### Bài6 Cho một mảng số nguyên `nums` và một số nguyên `target`, hãy trả về các chỉ số của hai số sao cho tổng của chúng là `target`. */

// function twoSum(nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     let k = nums.indexOf(diff);
//     if (k > -1 && k !== i) {
//       result[0] = i;
//       result[1] = k;
//       break;
//     }
//   }
//   console.log(result);
// }
// console.log("VD1:");
// twoSum([2, 7, 11, 15], 9);
// console.log("VD2:");
// twoSum([3, 2, 4], 6);
// console.log("VD3:");
// twoSum([3, 3], 6);
