const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 .postCss(
    "resources/css/app.css",
    "public/css",
    [
        //
    ]
)
 */

mix.js("resources/js/pages/Home/index.jsx", "public/js/pages/Home").react();
mix.js(
    "resources/js/pages/Register/index.jsx",
    "public/js/pages/Register"
).react();
mix.js("resources/js/pages/Login/index.jsx", "public/js/pages/Login").react();
