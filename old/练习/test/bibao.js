function add() {
  let i = 0;
  return () => console.log(++i % 2);
}

const fn = add();
fn(); // 1
fn(); // 0
fn(); // 1
fn(); // 0
