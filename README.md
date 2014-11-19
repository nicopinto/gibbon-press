GIBBON-PRESS: Wordpress SPA boilerplate
===================================

Wordpress boilerplate with Single Page Application architecture and a layer of RESTFUL services.

*Based on the project by Chan Charles SPA WP Theme
[github.com/chancharles/spa-wp-theme](https://github.com/chancharles/spa-wp-theme)*

Wordpress installed
-------------------

The folder `/public` is for the wordpress installation, now is the 3.9.1 with two plugins loaded by default:

**WP RESTful JSON API**
[Plugin Site](https://wordpress.org/plugins/json-rest-api/)
[Github](https://github.com/WP-API/WP-API)


**Custom Post Type UI**
[Plugin Site](http://wordpress.org/plugins/custom-post-type-ui/)
[Webdev Studios — Official Site](http://webdevstudios.com/plugin/custom-post-type-ui/)


Host custom domain
------------------

Edit the following file: `/etc/hosts`

and add `127.0.0.1 custom.local`

Apache Virtual Host (Linux Configuration)
-------------------

To configurate the virtual host, the following file should be created:
`/etc/apache2/sites-available/custom.local`

Put this as content on the file:

```
<VirtualHost *:80>
  ServerName custom.local
  ServerAdmin admin@mail.com
  ServerAlias www.custom.local
  DocumentRoot /path-to-project/public
    
  <Directory /path-to-project/public>
    Options Indexes FollowSymLinks MultiViews
    AllowOverride all
    Order allow,deny
    allow from all
  </Directory>
</VirtualHost>
```

Execute this command:
`sudo a2ensite custom.local`

And restart your apache service with: `sudo service apache2 restart`

Apache Virtual Host (Mac Configuration)
-------------------

Open the file: `/etc/apache2/extra/httpd-vhosts.conf`

And put this as content on it:

```
<VirtualHost *:80>
  ServerName custom.local
  ServerAdmin admin@mail.com
  ServerAlias www.custom.local
  DocumentRoot /path-to-project/public
    
  <Directory /path-to-project/public>
    Options Indexes FollowSymLinks MultiViews
    AllowOverride all
    Order allow,deny
    allow from all
  </Directory>
</VirtualHost>
```

And restart your apache service with: `sudo apachectl restart`

MySQL Wordpress Database
------------------------

The name of the database is: **database_name**
The file dump for the initial schema is: */sql/bootstrap.sql*

You can import it like this: `mysql -u username -p database_name < filename.sql`

Wordpress admin panel
---------------------

To access to the admin, the url is: **/wp-admin**

Admin: `admin`
Password of 'eze': `1234`

Grunt compiler
--------------

First you need to execute npm install on the folder **wp** to get all the node modules.
Then you can execute the command: `grunt`

The folder */target/redbee-site* will be generated with all the files of wordpress, the javascript processed with jslint and the css file (styles.css) compiled from the sass source files.



ENJOY!
------
