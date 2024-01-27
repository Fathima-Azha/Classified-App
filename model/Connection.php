<?php

class Connection
{
    public static $connection;

    public static function setUpConnection()
    {

        if (!isset(Connection::$connection)) {
            Connection::$connection = new mysqli("localhost", "root", "Fa@azha1", "", "3306");
        }
    }

    public static function iud($q)
    {
        Connection::setUpConnection();
        Connection::$connection->query($q);
    }

    public static function search($q)
    {
        Connection::setUpConnection();
        $resultSet = Connection::$connection->query($q);
        return $resultSet;
    }
}
?>