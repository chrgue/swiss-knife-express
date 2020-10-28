# Swiss Knife Express

Express application bloat with demo use cases:
* Handling CPU intensive operations with worker threads

## Start Service

    $ docker run --rm -p 3000:3000 chrgue/swiss-knife-express

## Test threaded & non-threaded approach for CPU intensive operations

```bash
    TEST_DURATION=10; TEST_USERS=5; \                                                                                                                                                       ✘  18:04:21
    npx autocannon -c $TEST_USERS -d $TEST_DURATION "http://localhost:3000/blocking" && \ 
    npx autocannon -c $TEST_USERS -d $TEST_DURATION "http://localhost:3000/blocking?threads=true"
```
