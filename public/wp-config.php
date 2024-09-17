<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '+ABJT+gvizum1BiRYw4>&8G:JAyQUhTYXb*lX_E0G2x6<<KkHWI+MrG*hr0JaPuy' );
define( 'SECURE_AUTH_KEY',   'Wnk?E5N#pmh0E*nBX`y_ms%SPzh66]jM?=:xCivD>2BFFVYS+MFR86LXprWLjKo0' );
define( 'LOGGED_IN_KEY',     'F)=zw9_tjg/~$ SY@EhPxAQ)%A=2tSs@,*Gre[80<>wG)}IT[h:v+o{FC5~*{T!1' );
define( 'NONCE_KEY',         'k#hs$BYTDYdwy;3+zkGF%Grf52~vP`+#6&iges-QM02HZz3f<8%$jC=P*aT `@<.' );
define( 'AUTH_SALT',         'J}($x)V<feP8f/2 Tc9@/.}2hrA>GCWCQwGvh F5~dmAKV>Pov_e*GVaJbLtn2|~' );
define( 'SECURE_AUTH_SALT',  'dytZ>5>o[_3#sZC[On.=3N:U},[/Y~uUtSp U}.y#zI^pTO@1q[2tGzvV^32/g{m' );
define( 'LOGGED_IN_SALT',    'WeAHKLv]g%l~[Gw$G(b&Rg+1EsZ-I<>Vv$?ZifQ7{V^0ktRIx=H$<*9iOROpiO7[' );
define( 'NONCE_SALT',        'vg~Z<jS`rt(eYzDX!Wcxth6:cRHwFbwY;0Hr2|dJd/UUT%;;.h({w>wcuZl9w?~!' );
define( 'WP_CACHE_KEY_SALT', 'j?B,azW2bv.:p.K|2#fw(4C&_#ZDqdA#7L I-u(iJrZri9T<V`(1|sv/WD#sB&~H' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
