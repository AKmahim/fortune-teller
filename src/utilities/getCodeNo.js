const data = [
    { "id": 1, "code": "0090726979" },
    { "id": 2, "code": "3152786515" },
    { "id": 3, "code": "0091308995" },
    { "id": 4, "code": "0091631379" },
    { "id": 5, "code": "2690866243" },
];

function getIdFromCode(code) {
    for (const item of data) {
        if (item.code === code) {
            return item.id;
        }
    }
    return null; // If no matching code is found
}

export {getIdFromCode};