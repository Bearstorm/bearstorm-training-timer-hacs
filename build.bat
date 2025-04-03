@echo off
echo 🔧 Running Bearstorm Timer Build...
echo -----------------------------------
echo.

REM Optional: install node modules
if not exist node_modules (
    echo 📦 Installing dependencies...
    npm install
)

echo 🚀 Building plugin...
npm run build

echo.
echo ✅ Build complete!
pause
