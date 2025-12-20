<?php

require __DIR__ . '/../vendor/autoload.php';

use App\Controller\AudioTypeConverterController;
use App\Controller\HomeController;
use Src\Router;

$router = new Router();

$router->get("/", [HomeController::class, 'home']);

// Audio Types
$router->post("/flac-to-mp3", [AudioTypeConverterController::class, 'flacToMp3']);
$router->post("/mp3-to-flac", [AudioTypeConverterController::class, 'mp3ToFlac']);
$router->post("/mp3-to-wav", [AudioTypeConverterController::class, 'mp3ToWav']);
$router->post("/wav-to-mp3", [AudioTypeConverterController::class, 'wavToMp3']);


$router->dispatch();