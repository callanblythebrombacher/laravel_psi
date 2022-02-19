<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
         'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {

        $this->registerPolicies();
        Passport::routes();
        Passport::loadKeysFrom(__DIR__.'/../../storage');
        Passport::tokensCan([
            'createUsers' => 'can create new users',
            'editUsers' => 'can edit users',
            'deleteUsers' => 'can delete users',
            'editCurrent' => 'can edit current profile',
            'isAdmin' => 'has access to admin privileges',
            'canCreateAdmin' => 'can create admin level user',
        ]);
    }
}
