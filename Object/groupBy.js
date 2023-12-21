const people = [
  { id: 1, name: "Alice", age: 25, city: "New York" },
  { id: 2, name: "Bob", age: 30, city: "San Francisco" },
  { id: 3, name: "Charlie", age: 28, city: "New York" },
  { id: 4, name: "David", age: 25, city: "Los Angeles" },
];

const groupBy = (obj, keyGetter) => {
  return obj.reduce((acc, curr) => {
    const key = keyGetter(curr);
    if (!acc[key]) acc[key] = [];
    acc[key].push(curr);
    return acc;
  }, {});
};

console.log(groupBy(people, (item) => item.city));

/* 
{
  'New York': [
    { id: 1, name: 'Alice', age: 25, city: 'New York' },
    { id: 3, name: 'Charlie', age: 28, city: 'New York' }
  ],
  'San Francisco': [ { id: 2, name: 'Bob', age: 30, city: 'San Francisco' } ],
  'Los Angeles': [ { id: 4, name: 'David', age: 25, city: 'Los Angeles' } ]
}
*/
