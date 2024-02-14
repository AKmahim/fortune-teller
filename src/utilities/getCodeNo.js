const data = [
  { id: 1, code: "0090726979" },
  { id: 2, code: "3152786515" },
  { id: 3, code: "0091308995" },
  { id: 4, code: "0091631379" },
  { id: 5, code: "2690866243" },
  { id: 6, code: "0092223875" },
  { id: 7, code: "0091655379" },
  { id: 8, code: "3146540371" },
  { id: 9, code: "3146019155" },
  { id: 10, code: "2690856531" },
];

function getIdFromCode(code) {
    for (const item of data) {
        if (item.code === code) {
            return item.id;
        }
    }
    return null; // If no matching code is found
}

export { getIdFromCode };


// 0090726979
// 3152786515
// 0091308995
// 2690866243
// 0091631379
// 0092223875
// 0091655379
// 3146540371
// 3146019155
// 2690856531

