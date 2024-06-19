echo '💙 💙 💙 Port Killer 💙'
echo "💙 💙 💙 port: 3000, 3400, 8080 and 4000";

kill -9 $(lsof -t -i:3000)
kill -9 $(lsof -t -i:3400)
kill -9 $(lsof -t -i:4000)
kill -9 $(lsof -t -i:8080)



echo "🔴 🔴 🔴 🔴 🔴 🔴 ports should be dead, dead!";
