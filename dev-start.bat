@echo off

rem start the mysql server.
rem echo Starting MySQL Database...
rem start "Dev MYSQL" /B ".\servers\MySQL\bin\mysqld" --log_syslog=0
rem timeout 2 /nobreak

rem start the php server.
echo Starting PHP Web Server...
start "Dev Web" /B php -S localhost:80 -t www > NUL 2> NUL

rem wait a moment
rem if sleep was found likely gnu utils are in path likely from git being
rem installed and the gnu timeout is not the same as windows timeout.
where sleep >nul 2>nul
IF ERRORLEVEL 0 ( sleep 2 )
ELSE ( timeout 2 /nobreak )

rem pop up a tab to go
echo Opening browser...
start http://localhost
