function addDelay() {
   return new Promise((resolve) => setTimeout(resolve, 300));
}
async function logWithDelay(text) {
   await addDelay();
   console.log(text);
}
async function logArrayInfo(array) {
   for (let index = 0; index < array.length; index++) {
      const item = array[index];
      await logWithDelay(item);
   }

   console.log("Done!");
}

logArrayInfo([1, 2, 3]);

// CONSOLE
//----------
// "Done!"
// 1
// 2
// 3
