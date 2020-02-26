## 1. Install Memcached (Ubuntu)

```
sudo apt-get update
sudo apt-get install memcached
```

## 2. Configure Memcached

```
sudo nano /etc/memcached.conf
```
To increase memory usage add to your config -m in MB:

```
-m 4096
```

## 3. Start Memcached server

```
sudo service memcached start
```
To stop and restart use commands:

```
sudo service memcached stop
sudo service memcached restart
```

## 4. Communicate with Memcached server

```
telnet localhost 11211
stats
quit
```
All commands: https://github.com/memcached/memcached/wiki/Commands

Delete all keys:

```
echo flush_all > /dev/tcp/127.0.0.1/11211
```

## 5. Start Express server

```
npm install
```

Simple demo:

```
npm run basic
```

Full version:

```
npm run pro
```




