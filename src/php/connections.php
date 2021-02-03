<?php

// htmlspecialchars()

class Connection
{

    public $pdo = null;
    private $serverName = "localhost";
    private $username = "root";
    private $password = null;
    private $database = "email_server";

    public function __construct()
    {
        try {
            $this->pdo = new PDO("mysql:host=$this->serverName;dbname=$this->database", $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "ERROR: " . $exception->getMessage();
        }
    }
    public function get__data()
    {
        if ($this->pdo != null) {
            $data = $this->pdo->prepare("SELECT * FROM $this->database");
            $data->execute();
            return $data->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return null;
        }
    }
    public function Send__data($value)
    {
        $data = $this->pdo->prepare("INSERT INTO $this->database ( email ) VALUES (:email);");
        $data->bindValue('email', $value['email']);
        return $data->execute();
    }
    public function delete__data($value)
    {
        $data = $this->pdo->prepare("DELETE FROM $this->database WHERE id = :id");
        $data->bindValue('id', $value);
        return $data->execute();
    }
}

return new Connection();
