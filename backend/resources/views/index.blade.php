<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>My Blog</title>
    </head>
    <body>
        <div id="app">
            <app/>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
