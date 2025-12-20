<?php

declare(strict_types=1);

namespace App\Controller;

class HomeController
{
    public function home()
    {
        return json_encode("STARTED!");
    }
}