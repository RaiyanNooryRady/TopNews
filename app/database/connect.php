<?php
$host='localhost';
$user='root';
$pass='rady123';
$db_name='newsdb';
$conn=new MySQLi($host,$user,$pass,$db_name);
if($conn){
    echo 'connected successfully to newsdb db';
}
