<?php

return [


    'defaults' => [
        'guard' => 'client',
        'passwords' => 'clients',
    ],
    'guards' => [
        'client' => [
            'driver' => 'session',
            'provider' => 'clients',
        ],
        'admin' => [
            'driver' => 'session',
            'provider' => 'admins',
        ],
    ],

    'providers' => [
        'client' => [
            'driver' => 'eloquent',
            'model' => App\Models\Client::class,
        ],

        'clients' => [
            'driver' => 'database',
            'table' => 'clients',
        ],

        'admins' => [
            'driver' => 'database',
            'table' => 'admins',
        ],
    ],
    'passwords' => [
        'clients' => [
            'provider' => 'clients',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],
    'password_timeout' => 10800,

];
