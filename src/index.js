// const name = "aaa";
// const age = 28;

// //文字列
// const msg = age + name + "da";
// console.log(msg);

// //テンプレート文字列
// const msg2 = `名前は${name}で${age}だ`;
// console.log(msg2);

//従来の関数
function func1(str) {
  return str;
}
// console.log(func1("func1da"));
const func2 = function (str) {
  return str;
};
// console.log(func2("func2da"));

//アロー関数============================
const func3 = (str) => {
  return str;
};
// console.log(func3("func3da"));

const func4 = (num1, num2) => {
  return num1 + num2;
};
//{}省略できる
//const func4 = (num1,num2) => num1 + num2;
// console.log(func4(10, 20));

//分割代入＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//オブジェクト
// const myProfile = {
//   name: "aiu",
//   age: 28
// };
// const msg2 = `名前は${myProfile.name}で${myProfile.age}だ`;
// console.log(msg2);
//分割
// const { name, age } = myProfile;
// const msg3 = `名前は${name}で${age}だ！`;
// console.log(msg3);

//配列
const myProfile = ["aaa", 25];
const msg4 = `名前は${myProfile[0]}で${myProfile[1]}だ`;
// console.log(msg4);
//分割
const [name, age] = myProfile;
const msg5 = `名前は${name}で${age}だ!`;
// console.log(msg5);

//デフォルト値　引数など
const hello = (name = "ゲスト") => {
  // console.log(`こんにちは${name}さん`);
};
hello();

//スプレッド構文＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => {
  // console.log(num1 + num2);
};
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列コピー
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
// console.log(`arr6:${arr6}`);

//結合
const arr7 = [...arr4, ...arr5];
// console.log(`arr7:${arr7}`);

//mapやfilterを使った配列処理==========================
const nameArr = ["田中", "山田", "鈴木"];
//①mapを使わない書き方
for (let index = 0; index < nameArr.length; index++) {
  // console.log(`${index}は${nameArr[index]}`);
}
//map
const nameArr2 = nameArr.map((name) => {
  return name;
});
// console.log(`nameArr2:${nameArr2}`);
//mapをつかった①と同じ処理
// nameArr.map((name,index)=> console.log(`${index}は${name}`));

// filter　条件指定して新しい配列を作る
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "田中") {
    return name;
  } else {
    return `${name}さん`;
  }
});
// console.log(newNameArr);

//三項演算子＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const val1 = 1 > 0 ? `trueです` : `falseです`;
// console.log(val1);

// toLocaleString = 数字の桁区切り
// typeof = 型判定
const num = 1300;
const formattedNum =
  typeof num === `number` ? num.toLocaleString() : `数値入力`;
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100超えてる" : "範囲内";
};
// console.log(checkSum(50, 60));

//豆知識＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//　||　は左側がfalseなら右側を返す
//　&&　は左側がtrueなら右側を返す
const num100 = 100;
const fee = num100 || "未設定";
// console.log(fee);

const num200 = null;
const fee2 = num200 && "未設定";
// console.log(fee2);
