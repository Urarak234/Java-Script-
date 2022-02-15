let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[Math.round((styles.length-1) / 2)] = "Классика"; // Делим общее кол-во элементов на двое и округляем до ближайшего целого. Это и есть середина.
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

