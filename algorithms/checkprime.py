def checkprime(N):
    count = 0
    i = 1
    while i * i <= N:
        if N % i == 0:
            if i*i == N:
                count += 1
            else:
                count += 2
        i += 1
    if count == 2:
        print("%d is a prime nuber" % N)
    else:
        print("%d is not a prime number." % N)
        
#TEST
checkprime(24)
checkprime(71)
