<?php
	$name_client  = $_POST['name_client'];
	$phone_client  = $_POST['phone_client'];
	$model  = $_POST['model'];
	$color  = $_POST['color'];

	if ($_POST['model'] != 'none') {
		$model = "<b>Модель:</b> ".$_POST['model'].'<br/>';
	} else {
		$model = '';
	}

	if ($_POST['color'] != 'none') {
		$color = "<b>Цвет:</b> ".$_POST['color'].'<br/>';
	} else {
		$color = '';
	}

	$to = "ragnoras@yandex.ru"; 
	$subject = "Форма заказа с лендинга";
	$message = "
		<b>Имя:</b> ".$name_client." <br/>
		<b>Телефон:</b> ".$phone_client." <br/>
		<b>Почта:</b> ".$email_client." <br/>".$model.$color;
	$headers  = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";	
	$headers .= "From: Landing<land@stslogistics.ru>" . "\r\n";
	//$headers .= "To: Landing <ragnoras@yandex.ru>" . "\r\n";
	//$headers .= "Cc: birthdayarchive@example.com" . "\r\n";
	//$headers .= "Bcc: birthdaycheck@example.com" . "\r\n";
	
	mail ($to,$subject,$message,$headers) or print "Не могу отправить письмо !!!";


echo '<div class="thanks"><div class="uk-text-center" >Ваша заявка принята, в скором времени наш менеджер свяжется с Вами.</div></div>';


?>