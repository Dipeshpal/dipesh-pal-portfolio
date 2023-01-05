<!-- include('db.php'); -->
header('Content-type: json/application');
header('access-controll-allow-method: post');

$data = json_decode("file_get_contents("php://input"), true");

$username = $data['username'];


$slct = mysqli_query($conn, 'select * from table');

if(mysqli_num_rows($slct)>0){
    $show = mysqli_fetch_all($slct,MYSQLI_ASSOC)

    echo json_encode($show);
}


$multiDArry = array(name=> 'kansoft', city=>'udaipur',
    employe=>{
    empName=>'sanjay', phone=>'2135530121'
})


foreach($multiDArry as $key & $value){
    echo $employe.$empName;
}

