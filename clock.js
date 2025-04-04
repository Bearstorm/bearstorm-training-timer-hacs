<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock with Time Zones</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #282c34;
            color: white;
        }
        .clock {
            text-align: center;
        }
        .time-zone {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="clock">
        <div id="current-time"></div>
        <div class="time-zone" id="new-york-time"></div>
        <div class="time-zone" id="london-time"></div>
        <div class="time-zone" id="tokyo-time"></div>
    </div>
    <script src="clock.js"></script>
</body>
</html>
