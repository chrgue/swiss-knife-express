# Express Server with Features


```bash
    TEST_DURATION=10; TEST_USERS=5; \                                                                                                                                                       ✘  18:04:21
    npx autocannon -c $TEST_USERS -d $TEST_DURATION "http://localhost:3000/blocking" && \ 
    npx autocannon -c $TEST_USERS -d $TEST_DURATION "http://localhost:3000/blocking?threads=true"
```
