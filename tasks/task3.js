const tree = {
   value: 3,
   children: [
      { value: 1, children: [] },
      { value: 4, children: [] },
      {
         value: 3,
         children: [
            {
               value: 8,
               children: [
                  {
                     value: 2,
                     children: [],
                  },
                  {
                     value: 5,
                     children: [],
                  },
               ],
            },
            {
               value: 0,
               children: [],
            },
         ],
      },
   ],
};

let sum = 0;

function summarize(tree) {
   const value = tree.value;

   if (isMultipleOfTwo(value)) {
      sum += value;
   }

   if (tree.children.length > 0) {
      for (let i = 0; i < tree.children.length; i++) {
         const subTree = tree.children[i];
         summarize(subTree);
      }
   }

   return sum;
}

function isMultipleOfTwo(number) {
   if (number % 2 === 0) {
      return true;
   } else {
      return false;
   }
}

console.log(summarize(tree));

// Функция summarize steps
// 1. Обращаемся к tree.value, и если он кратен 2, то добовлеям кго к переменной sum
// 2. Если у этого tree.children.length > 0, то возращаемся к 1 пункту уже работая с массивом tree.children, где tree будет каждый tree.children[i]
// 3. Возращаем сумму
