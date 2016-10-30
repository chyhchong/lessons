# Running the Thermostat Lesson
## Easy Setup
1. Spin up an ec2 instance
2. run `curl -f https://raw.githubusercontent.com/cppignite/lessons/thermostat-webdev/Thermostat/download-and-run.sh | sh`

## Standard Setup
1. Spin up an ec2 instance
2. ssh into the instance
3. Run `sudo yum update`
4. Clone this repo.
5. If the command `docker` returns an error you might need to download the docker client and start the docker dameon. Do some googling for installing docker on what ever version of linux your ec2 instance is running.
6. Try to run the shell script `./run.sh` if you get an error, you might need to kill apache if you are getting a port in use error. You can use a command like: `sudo /etc/rc.d/init.d/httpd stop` but if that doesn't work you'll have to do some googling search for 'kill apache'.
