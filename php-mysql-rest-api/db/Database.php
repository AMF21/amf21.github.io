<?php 

class Database {
    private $dbHost;
    private $dbPort;
    private $dbName;
    private $dbUser;
    private $dbPassword;
    private $dbConnection;

    public function __construct()
    {
        // read database credentials from the environment
        $this->dbHost = getenv('DB_HOST');
        $this->dbPort = getenv('DB_PORT');
        $this->dbName = getenv('DB_DATABASE');
        $this->dbUser = getenv('DB_USERNAME');
        $this->dbPassword = getenv('DB_PASSWORD');
        if (!$this->dbHost || !$this->dbPort || !$this->dbName || !$this->dbUser || !$this->dbPassword){
            die("Please set database credentials as environment variables");
        }
    }

    public function connect(){
        $connection=[
        'host'=> 'localhost' ,
        'user'=>'root',
        'password'=>'',
        'database'=>'onilne_library'
        ];
        $dbConnection= new mysqli($connection['host'],$connection['user'],$connection['password'],$connection['database']);

        if($mysqli->connect_error){
        die("Error connecting to the Database " . $mysqli->connect_error );
        }
        return $this->dbConnection;
    }
}
