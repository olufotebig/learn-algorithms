def sieve_of_eratos(N):
    isPrime = [1 for i in range(N+1)]
    isPrime[0] = 0
    isPrime[1] = 0
    i = 2
    while i * i <= N:
        if isPrime[i] == 1:
            j = i * i
            while j <= N:
                isPrime[j] = 0
                j += i
        i += 1
    print(isPrime)
#TEST        
sieve_of_eratos(10)
