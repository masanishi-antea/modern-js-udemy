/**
 * constm let等の変数宣言
 */
//  var val1 = "var変数";
//  console.log(val1);

//  // var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1);

//  // var変数は再宣言可能
//  var val1 = "var変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言が不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const変数は再宣言は不可
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "にしの",
//   age: 36,
// };
// // console.log(val4);
// val4.name = "nishino";
// val4.address = "Tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// 「私の名前はじゃけぇです。年齢は28歳です。」
// 従来の方法
// const msg1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(msg1);

// テンプレート文字列を用いた方法
// const msg2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(msg2);

/**
 * アロー関数
 */

 // 従来の関数
//  function func1(str){
//    return str;
//  }
//  const func1 = function(str){
//    return str;
//  }
//  console.log(func1("func1です"));

 // アロー関数
//  const func2 = (str) => {
//   return str;
//  };
// const func2 = (str) => str;
// console.log(func2("func2です"));

//  const func3 = (num1, num2) => {
//   return num1 + num2;
//  };

//  console.log(func3(10, 20));

/**
 * 分割代入
 */
// オブジェクト
// const myProfile = {
//   name: "nishino",
//   age: 35,
// };

// const msg1 = `msg1:名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(msg1);

// const {name, age} = myProfile;
// const msg2 = `msg2:名前は${name}です。年齢は${age}歳です。`;
// console.log(msg2);

// 配列
// const myProfile = ['nishino', 35];
// const msg3 = `msg3:名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(msg3);

// const [name, age] = myProfile; 
// const msg4 = `msg4:名前は${name}です。年齢は${age}歳です。`;
// console.log(msg4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん！`);
// sayHello('nishino');

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2, 3, 4];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; // 参照も渡すため、内部の値を変更してしまう
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "山本"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "山本"){
//     return name;
//   }else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueのとき : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです'　: 'falseです';
// console.log(val1); 

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲以内です';
// }
// console.log(checkSum(50, 50));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);
