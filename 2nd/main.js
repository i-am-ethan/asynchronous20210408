//サーバとのやりとりに時間がかかる処理
//通信速度、サーバー負荷、処理に時間がかかる場合

//setTimeoutで遅延を意図的に起こす
function promiseTest(pay, seconds) {
  return new Promise((ok, ng) => {
    setTimeout(() => {
      if (pay > 100) {
        let change = pay - 100;
        console.log(`${seconds}秒、おつりは${change}です`);
        ok(change);
      }
      ng("お金がらりません");
    }, seconds * 1000);
  });
}
console.log(1);
promiseTest(300, 2).then((change1) => {
  promiseTest(change1, 3);
});
console.log(3);
