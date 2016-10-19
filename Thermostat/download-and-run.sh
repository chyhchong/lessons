echo "Updating System Resources"
sudo yum -y update

echo "Installing Git"
sudo yum -y install git

echo "Installing Docker"
curl -fsSL https://get.docker.com/ | sh
sudo service docker start

echo "Downloading lesson files"
git clone https://github.com/cppignite/lessons

echo "Starting Web Service"
cd lessons/Thermostat/web-service/
sudo ./run.sh