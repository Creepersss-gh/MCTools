function openLink($link) { 
    window.location.href = $link; 
}

function buttonCheckbox($element1, $element2) {
    const elem1 = document.getElementById($element1);
    const elem2 = document.getElementById($element2);
    if (elem1.disabled == true) {
        elem1.disabled = false;
        elem2.disabled = true;
    }
    else if (elem1.disabled == false) {
        elem1.disabled = true;
        elem2.disabled = false;
    }
}

function give_gen_click() {
    const identificator = document.getElementById("ID").value.trim();
    const name = document.getElementById("name").value.trim();
    const lore = document.getElementById("lore").value.trim();
    const eatable = document.getElementById("ey");

    if (!identificator || !name) {
        alert("Заполните ID и имя, чтобы сгенерировать команду.");
        return;
    }

    // Проверяем, существует ли кнопка eatable
    if (!eatable) {
        console.error("Элемент с id='ey' не найден.");
        return;
    }

    let command = "/give @s " + identificator +
        "[item_name:'" + name +
        "',lore:['" + lore + "']";

    // Проверяем, отключена ли кнопка "Да"
    if (eatable.disabled === true) {
        command += ",consumable:{}";
    }

    command += "]";
    document.getElementById("result").value = command;
}

function copyResult() {
    const resultField = document.getElementById("result");
    
    if (resultField.value.trim() === "") {
        alert("Отствует текст для копирования.");
        return;
    }

    resultField.select(); // Выделяем текст
    resultField.setSelectionRange(0, 99999); // Для мобильных браузеров

    navigator.clipboard.writeText(resultField.value)
        .then(() => {
            alert("Команда была скопирована в буфер обмена.");
        })
        .catch(err => {
            console.error("Ошибка попытки скопировать текст: ", err);
            alert("Произошла ошибка при попытке скопировать текст. Повторите попытку позже или скопируйте вручную. Ошибка: ", err);
        });
}