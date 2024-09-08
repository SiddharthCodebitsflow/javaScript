let map = new Map();
map.set("key1", 1);
map.set("key2", 2);
map.set("key3", 3);
console.log(map.get("key3"));
console.log(map);

let object = { key1: 1, key2: 2, key3: 3 };

console.log("key1" in object); // return true
console.log("key1" in map); // return false

let userRoles = new Map();
userRoles.set({ name: "Alice" }, "admin");
userRoles.set({ name: "Bob" }, "editor");
userRoles.set({ name: "Bob" }, "editor");

console.log(typeof []); // return object
console.log(userRoles.size); // return size of Map

for (let [user, role] of userRoles) {
  console.log(user.name, "is", role);
}
