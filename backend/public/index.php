<?php

require __DIR__ . '/../vendor/autoload.php';

use Src\Router;

$router = new Router();

// $router->get("/", [TestController::class, 'test']);


$router->dispatch();