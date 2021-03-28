<?php
    echo "<body style='background-color: #09100D'>";

    //получим данные с элементов формы
    $email = $_POST['email'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $text = $_POST['text'];

    //обрабатываем полученные данные
    //преобразование в сущности (мнемоники)
    $email = htmlspecialchars($email);
    $name = htmlspecialchars($name);
    $tel = htmlspecialchars($tel);
    $text = htmlspecialchars($text);

    //декодирование URL
    $email = urldecode($email);
    $name = urldecode($name);
    $tel = urldecode($tel);
    $text = urldecode($text);

    //удаление пробельных символов с обоих сторон
    $email = trim($email);
    $name = trim($name);
    $tel = trim($tel);
    $text = trim($text);

    //отправляем данные на почту

    if(mail("salonkhvangel@mail.ru",
        "Новое письмо с сайта",
        "Email: ".$email."\n".
        "Имя: ".$name."\n".
        "Телефон: ".$tel."\n".
        "Текст: ".$text,
        "From: no-reply@mydomain.ru \r\n")
    ){
        echo '<span style="font-family: sans-serif; color: white;">Сообщение успешно отправленно🧡</span>';
    }else{
        echo('Есть ошибки! Проверьте данные...');
    }
?>