function test1() {
  return "関数1";
}
console.log(test1());

const test2 = function () {
  return "関数2";
};
console.log(test2());

const test3 = () => {
  return "関数3";
};
console.log(test3());

// Promise
// 1 状態(ok/ng)と値
// 2 Promiseチェーン

// callbackの引数が状態になる

function promiseTest1() {
  return new Promise((ok) => {
    ok("プロミス1です");
  });
}
console.log(promiseTest1());

const promiseTest2 = new Promise((ok) => {
  ok("プロミス2です");
});
console.log(promiseTest2);

function testPromise3(input) {
  return new Promise((ok) => {
    ok(`プロミス${input}です`);
  });
}
console.log(testPromise3("太郎"));

function promiseTest4(pay) {
  return new Promise((ok) => {
    let change = pay - 100;
    ok(change);
  });
}
console.log(promiseTest4(300));

promiseTest4(300)
  .then((change) => {
    console.log(change);
    return promiseTest4(change);
  })
  .then((change2) => {
    console.log(change2);
  });

function PromiseTest5(pay) {
  return new Promise((ok, ng) => {
    if (pay > 100) {
      let change = pay - 100;
      ok(change);
    }
    ng("お金がありません");
  });
}
console.log(
  PromiseTest5(50).catch((e) => {
    console.log(e);
  })
);
