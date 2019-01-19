# Chris's Proxy Service

## Starting the Proxy

NPM Dependencies:
  - express
  - express-handlebars (for templating) 

Proxy service for FireBnB. To launch

``` sh
# install if you haven't yet 
$> npm install
# run 
$> npm start
```

## Launch Services Tool (OS X)


Launch services very easily with this tool that uses applescript in a bash script to automagically launch a series of commands given a directory and the command. Use npmDirs.txt to define your folders and command line script. Lines with # or that are blank are ignored! More information on this tool can be found [here](serviceLauncher/README.md).

``` sh
# kill all terminal windows (eh there might be a lot)
$> killall Terminal
# reccomended if you might have node processes already running
$> killall -9 node
#run that puppy (if not excutable chmod +x launch.sh)
$> ./serviceLauncher/launch.sh
# OR just do
$> npm run launchServices
```