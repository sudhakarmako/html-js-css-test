let a = {
  dialog: {
    dialog_trunk_1: {
      message: "This is just a JSON Test",
    },

    dialog_trunk_2: {
      message: "and a test of the second message",
    },

    dialog_trunk_3: {
      message:
        "This is a test of a bit longer text. Hopefully this will at the very least create 3 lines and trigger us to go on to another box. So we can test multi-box functionality, too.",
    },
  },
};

let datas = a.dialog;
console.log(Object.keys(datas));

let keyValue = Object.keys(datas);
keyValue.forEach((i) => {
  console.log(datas[i].message);
});
