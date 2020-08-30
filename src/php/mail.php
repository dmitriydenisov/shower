<?php
$recedient = "dmitriyd2009@yandex.ru";
$siteeName = "Сайт Душевых";

$name = trim($_POST["grager-name"]);
$phone = trim($_POST["grager-phone"]);
$text = trim($_POST["grager-text"]);
$hourse = trim($_POST["grager-h"]);
$second = trim($_POST["grager-s"]);
$date = trim($_POST["grager-date"]);
$message = "Имя: $name"\n"Телефон: $phone"\n"Комментарий: $text"\n"Время: $hourse : $second"\n"Дата ожидания звонка: $date";    

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($name, $phone, $message, $hourse, $second, $date, "Content-type: text/plain; charset=\"UTF-8\"\n From: $recedient");
?>