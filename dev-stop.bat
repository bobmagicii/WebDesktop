@echo off

rem gracefully ask mysql to shut down.
rem echo Shutting MySQL Down...
rem .\servers\MySQL\bin\mysqladmin shutdown -u root -p

rem but just kill php yolo.
echo Shutting PHP Server Down...
taskkill /IM php.exe /F
