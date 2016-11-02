<?
  $selectText = $_GET["select_text"];
  $selectText2 = $_GET["select_text2"];
  $mysql = new mysqli('localhost','root','','date');
  if ($mysql->connect_errno) {
      die($mysql->connect_errno);
  }
  $mysql->query("set names utf8");
//$sqlstr = $selectText;
     $sqlstr = "select * from   $selectText where $selectText2";
  $result = $mysql->query($sqlstr);
  $myArray = array();
  while($record = $result->fetch_assoc())
    {
        array_push($myArray,$record);
    }
    echo json_encode($myArray);
?>