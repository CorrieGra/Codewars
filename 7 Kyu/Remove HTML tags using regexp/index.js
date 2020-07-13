// const reg = /(<[a-z]*\b[^>]*>)(?=\w)(<\/[a-z]*>)/
const reg = /(<[a-z]*\b[^>]*>)|(<\/[a-z]*>)/g

console.log("<div>test</div>".replace(reg, ""), "test");
console.log("<a href='#'>go to <b>start</b> page</a>".replace(reg, ""), "go to start page");