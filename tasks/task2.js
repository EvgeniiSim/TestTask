function createCats() {
   let cats = [];
   let i = 0;
   while (i < 10) {
      let cat = createCat(i);

      cats.push(cat);

      i++;
   }

   function createCat(i) {
      return function callIndex() {
         console.log(`My index is ${i}`);
      };
   }

   return cats;
}

let animals = createCats();
animals[0]();
animals[5]();

console.log(
   "Проеблема была связана с замыканиями. Так в нашем случае все функции, которые мы добляем в массив ссылались на {i: number} внешного лексического окружения. И так как мы все время это i увеличивали, следовательно все функции обновляли свое i"
);

// CONSOLE
//----------
// "My index is 10"
// "My index is 10"
