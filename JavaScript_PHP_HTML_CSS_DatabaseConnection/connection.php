<?php

	function ConnectToDatabase()
	{
		$connectionString = 'odbc:Driver={Microsoft Access Driver (*.mdb)};Dbq=C:\\xampp\\htdocs\\ass5\\a5.mdb';

		$connection = new PDO($connectionString);
		$connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		return $connection;
	}

?>



